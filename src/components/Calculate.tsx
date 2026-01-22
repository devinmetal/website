import React, { useState } from "react";
import * as XLSX from "xlsx";


type Shape = "lama" | "cap" | "ring";

interface Row {
  id: number;
  shape: Shape;
  materialType: string;
  materialName: string;

  thickness?: number; // Lama
  width?: number;     // Lama

  diameter?: number; // Çap (cap)
  outerDiameter?: number; // 👈 Dış Çap (ring)
  innerDiameter?: number; // 👈 İç Çap (ring)

  length?: number;
  unitKg: number;
  adet: number;
}


const MATERIALS = [
  {
    group: "Sert Bakır Alaşımları",
    items: [
      { name: "CuCrZr", density: 8.9 },
      { name: "CuNi2SiCr", density: 8.8 },
      { name: "CuCo2Be", density: 8.75 },
      { name: "CuCoNiBe", density: 8.75 },
      { name: "CuBe2", density: 8.3 },
    ],
  },
  {
    group: "Alüminyum Bronz",
    items: [
      { name: "CuAl10Fe3Mn", density: 7.45 },
      { name: "CuAl10Ni5Fe4", density: 7.45 },
      { name: "CuAl14Fe4Mn2", density: 7.25 },
    ],
  },
  {
    group: "Kalay Bronz",
    items: [
      { name: "CuSn12", density: 8.7 },
      { name: "CuSn12Ni", density: 8.7 },
      { name: "CuSn10", density: 8.7 },
    ],
  },
  {
    group: "Çelik",
    items: [
      { name: "2379", density: 7.85 },
      { name: "2344", density: 7.85 },
      { name: "2358", density: 7.85 },
      { name: "2360", density: 7.85 },
      { name: "2767", density: 7.85 },
      { name: "2343 ESR", density: 7.85 },
      { name: "2367", density: 7.85 },
      { name: "2714 QT", density: 7.85 },
      { name: "3243", density: 7.85 },
      { name: "3343", density: 7.85 },
      { name: "4057", density: 7.85 },
      { name: "4112", density: 7.85 },
      { name: "4542", density: 7.85 },
      { name: "4545", density: 7.85 },
      { name: "4534", density: 7.85 },
      { name: "8550", density: 7.85 },
      { name: "8519", density: 7.85 },
    ],
  }
];

const Calculate: React.FC = () => {
  const [shape, setShape] = useState<Shape>("lama");
  const [rows, setRows] = useState<Row[]>([]);
  const [counter, setCounter] = useState(1);
  const [error, setError] = useState<string | null>(null);



  const [selected, setSelected] = useState<any>(null);

  const [form, setForm] = useState({
    kalinlik: "",
    genislik: "",
    cap: "",
    disCap: "",
    icCap: "",
    boy: "",
  });

  const calculateUnitKg = () => {
  if (!selected) return 0;

  const d = selected.density;
  const boy = Number(form.boy);

  if (!boy) return 0;

  // LAMA
  if (shape === "lama") {
    return (
      Number(form.kalinlik) *
      Number(form.genislik) *
      boy *
      d /
      1_000_000
    );
  }

  // ÇAP
  if (shape === "cap") {
    return (
      3.14 *
      ((Number(form.cap) * Number(form.cap)) / 4000) *
      (boy / 1000) *
      d
    );
  }

  // RING
  if (shape === "ring") {
    return (
      3.14 *
      (
        (Number(form.disCap) * Number(form.disCap) -
          Number(form.icCap) * Number(form.icCap)) /
        4000
      ) *
      (boy / 1000) *
      d
    );
  }

  return 0;
};

const validateForm = () => {
  if (!selected) {
    setError("Lütfen bir malzeme seçiniz.");
    return false;
  }

  if (!form.boy || Number(form.boy) <= 0) {
    setError("Boy alanı zorunludur.");
    return false;
  }

  if (shape === "lama") {
    if (!form.kalinlik || !form.genislik) {
      setError("Lama için kalınlık ve genişlik girilmelidir.");
      return false;
    }
  }

  if (shape === "cap") {
    if (!form.cap) {
      setError("Çap değeri girilmelidir.");
      return false;
    }
  }

  if (shape === "ring") {
    if (!form.disCap || !form.icCap) {
      setError("Ring için iç ve dış çap girilmelidir.");
      return false;
    }

    if (Number(form.icCap) >= Number(form.disCap)) {
      setError("İç çap, dış çaptan büyük veya eşit olamaz.");
      return false;
    }
  }

  setError(null);
  return true;
};

const handleAdd = () => {
  if (!validateForm()) return;

  const unitKg = calculateUnitKg();
  if (!unitKg || !selected) return;

  setRows(prev => [
  ...prev,
  {
    id: counter,
    shape,
    materialType: selected.group,
    materialName: selected.name,

    thickness: shape === "lama" ? Number(form.kalinlik) : undefined,
    width: shape === "lama" ? Number(form.genislik) : undefined,

    diameter: shape === "cap" ? Number(form.cap) : undefined,

    outerDiameter: shape === "ring" ? Number(form.disCap) : undefined,
    innerDiameter: shape === "ring" ? Number(form.icCap) : undefined,

    length: Number(form.boy),
    unitKg,
    adet: 1,
  },
]);


  setCounter(c => c + 1);
};


  const updateAdet = (id: number, adet: number) => {
    setRows(rows =>
      rows.map(r =>
        r.id === id ? { ...r, adet } : r
      )
    );
  };

  const totalKg = rows.reduce(
    (sum, r) => sum + r.unitKg * r.adet,
    0
  );

  const exportToExcel = () => {
  if (rows.length === 0) return;

  const data = rows.map((r, index) => ({
    "#": index + 1,
    "Malzeme Tipi":
  r.shape === "lama"
    ? "LAMA"
    : r.shape === "cap"
    ? "ÇAP"
    : "RİNG",
    "Malzeme": r.materialName,
    "Kalınlık (mm)": r.thickness ?? "",
    "Genişlik (mm)": r.width ?? "",
    "Çap (mm)": r.diameter ?? "",
    "Dış Çap (mm)": r.outerDiameter ?? "",
    "İç Çap (mm)": r.innerDiameter ?? "",

    "Boy (mm)": r.length ?? "",
    "Kg / Adet": r.unitKg.toFixed(2),
    "Adet": r.adet,
    "Toplam Kg": (r.unitKg * r.adet).toFixed(2),
  }));

  // Toplam satırı
  data.push({
    "#": data.length + 1,
    "Malzeme Tipi": "",
    "Malzeme": "",
    "Kalınlık (mm)": "",
    "Genişlik (mm)": "",
    "Çap (mm)": "",
    "Dış Çap (mm)": "",
    "İç Çap (mm)": "",
    "Boy (mm)": "TOPLAM",
    "Kg / Adet": "",
    "Adet": rows.reduce((sum, r) => sum + r.adet, 0),
    "Toplam Kg": totalKg.toFixed(2),
  });

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Ağırlık Hesabı");

  XLSX.writeFile(workbook, "agirlik-hesaplama.xlsx");
};

  return (
    <div className="min-h-screen w-full -mt-48 bg-slate-100">
        <div className="mt-36 sm:mt-42 pt-52 px-4 sm:px-0 max-w-6xl mx-auto text-white space-y-6 ">

        {/* FORM */}
        <div className="bg-[#A08963] p-6 rounded-2xl backdrop-blur-xl space-y-4">
            <div className="text-center flex flex-col items-center gap-2">
                <h6 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
                    Ağırlık Hesaplama
                </h6>

                <span className="text-xs sm:text-sm text-white/70 max-w-lg text-center">
                    Lütfen aşağıdaki malzeme tiplerinden birisini seçerek işleminize devam ediniz.
                </span>

                {error && (
                    <div className="mt-3 bg-red-500/20 border border-red-500/40 text-red-300 px-4 py-2 rounded-xl max-w-md">
                    {error}
                    </div>
                )}
            </div>
            <select
                className="w-full p-2 rounded  text-black border border-white/20"
                onChange={e => {
                    const found = MATERIALS
                    .flatMap(m =>
                        m.items.map(i => ({
                        name: i.name,
                        density: i.density,
                        group: m.group,
                        }))
                    )
                    .find(x => x.name === e.target.value);

                    setSelected(found);
                }}
                >

            <option value="">Malzeme Seç</option>
            {MATERIALS.map(m => (
                <optgroup key={m.group} label={m.group}>
                    {m.items.map(i => (
                    <option key={i.name} value={i.name}>
                        {i.name}
                    </option>
                    ))}
                </optgroup>
                ))}
            </select>

            <div className="flex flex-col sm:flex-row gap-2">
            {["lama", "cap", "ring"].map(s => (
                <button
                key={s}
                onClick={() => setShape(s as Shape)}
                className={`flex-1 py-2 rounded-xl border
                    ${shape === s
                    ? "bg-white/20 border-white/30"
                    : "border-white/10 bg-white hover:bg-white/10 hover:text-white text-black"}`}
                >
                {s.toUpperCase()}
                </button>
            ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {shape === "lama" && (
                <>
                <input placeholder="Kalınlık" onChange={e => setForm(f => ({ ...f, kalinlik: e.target.value }))} className="input placeholder-black/70" />
                <input placeholder="Genişlik" onChange={e => setForm(f => ({ ...f, genislik: e.target.value }))} className="input placeholder-black/70" />
                </>
            )}
            {shape === "cap" && (
                <input placeholder="Çap" onChange={e => setForm(f => ({ ...f, cap: e.target.value }))} className="input col-span-2 placeholder-black/70" />
            )}
            {shape === "ring" && (
                <>
                <input placeholder="Dış Çap" onChange={e => setForm(f => ({ ...f, disCap: e.target.value }))} className="input placeholder-black/70" />
                <input placeholder="İç Çap" onChange={e => setForm(f => ({ ...f, icCap: e.target.value }))} className="input placeholder-black/70" />
                </>
            )}
            <input placeholder="Boy" onChange={e => setForm(f => ({ ...f, boy: e.target.value }))} className="input placeholder-black/70" />
            </div>

            <button
            onClick={handleAdd}
            className="w-full py-3 rounded-xl bg-[#6b5632] font-semibold"
            >
            Hesapla ve Tabloya Ekle
            </button>
        </div>

        {/* TABLO */}
        <div className="w-full overflow-x-auto">
            <table className="min-w-[900px] w-full border border-black rounded-xl overflow-hidden text-black  backdrop-blur-xl">            
                <thead className="bg-[#A08963] text-white">
                    <tr>
                        <th className="px-3 py-2 border-b border-black">#</th>
                        <th className="px-3 py-2 border-b border-black">Malzeme Tipi</th>
                        <th className="px-3 py-2 border-b border-black">Malzeme</th>

                        {/* Ölçüler */}
                        <th className="px-3 py-2 border-b border-black">Kalınlık (mm)</th>
                        <th className="px-3 py-2 border-b border-black">Genişlik (mm)</th>
                        <th className="px-3 py-2 border-b border-black">Çap (mm)</th>
                        <th className="px-3 py-2 border-b border-black">Dış Çap (mm)</th>
                        <th className="px-3 py-2 border-b border-black">İç Çap (mm)</th>
                        <th className="px-3 py-2 border-b border-black">Boy (mm)</th>
                        <th className="px-3 py-2 border-b border-black">Kg / Adet</th>
                        <th className="px-3 py-2 border-b border-black">Adet</th>
                        <th className="px-3 py-2 border-b border-black">Kg</th>
                        <th className="px-3 py-2 border-b border-black">Sil</th>
                    </tr>
                    </thead>
                <tbody>
                    {rows.map((r, i) => (
                        <tr key={r.id} className="hover:bg-[#8B754F]/5 transition">
                        <td className="px-3 py-2 border border-black/20">{i + 1}</td>
                        <td className="px-3 py-2 font-semibold border border-black/20">{r.shape.toUpperCase()}</td>
                        <td className="px-3 py-2 border border-black/20">{r.materialName}</td>

                        <td className="px-3 py-2 border border-black/20">{r.thickness ?? "-"}</td>
                        <td className="px-3 py-2 border border-black/20">{r.width ?? "-"}</td>
                        <td className="px-3 py-2 border border-black/20">{r.diameter ?? "-"}</td>
                        <td className="px-3 py-2 border border-black/20">{r.outerDiameter ?? "-"}</td>
                        <td className="px-3 py-2 border border-black/20">{r.innerDiameter ?? "-"}</td>
                        <td className="px-3 py-2 border border-black/20">{r.length ?? "-"}</td>

                        <td className="px-3 py-2 border border-black/20">{r.unitKg.toFixed(2)}</td>
                        <td className="px-3 py-2 border border-black/20">
                            <input
                                type="number"
                                min={1}
                                value={r.adet}
                                onChange={e => updateAdet(r.id, Number(e.target.value))}
                                className="w-20 sm:w-16 bg-[#A08963] border border-white/20 rounded text-center"
                                />
                            </td>
                        <td className="px-3 py-2 font-semibold border border-black/20">
                            {(r.unitKg * r.adet).toFixed(2)}
                        </td>
                            <td className="px-3 py-2 text-center border border-black/20">
                                <button
                                    onClick={() =>
                                    setRows(rows.filter(x => x.id !== r.id))
                                    }
                                    className="text-red-400 hover:text-red-600 text-xl sm:text-lg"                            >
                                    ✕
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-[#A08963] font-semibold">
                            <td colSpan={11} className="px-3 py-3 text-right">
                            TOPLAM
                            </td>
                            <td className="px-3 py-3 text-sm">
                            {totalKg.toFixed(2)} kg
                            </td>
                            <td colSpan={1} className="px-3 py-3 text-right">
                            </td>
                        </tr>
                    </tfoot>
            </table>
        </div>

        <style>{`
            th, td { padding: 8px; }
            .input {
            padding: 0.5rem;
            border-radius: 0.5rem;
            background: white;
            border: 1px solid rgba(255,255,255,0.2);
            color: black;
            }
        `}</style>
        <p className="mt-2 text-xs text-black text-center md:hidden">
            Tabloyu görüntülemek için sağa-sola kaydırabilirsiniz. 
            </p>
        <div className=" flex justify-center md:justify-end">
                <button
                    onClick={exportToExcel}
                    disabled={rows.length === 0}
                    className="mb-12 w-full md:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 font-semibold"
                >
                    Excel’e Aktar
                </button>
            </div>
        </div>
    </div>
  );
};

export default Calculate;
