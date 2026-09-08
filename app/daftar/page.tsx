"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type FormData = {
  namaLengkap: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  alamat: string;
  namaOrtu: string;
  noHp: string;
  email: string;
  asalSekolah: string;
  kelas: string;
  programPilihan: string;
  jadwalPilihan: string;
  catatanTambahan: string;
};

const initialForm: FormData = {
  namaLengkap: "",
  tempatLahir: "",
  tanggalLahir: "",
  jenisKelamin: "",
  alamat: "",
  namaOrtu: "",
  noHp: "",
  email: "",
  asalSekolah: "",
  kelas: "",
  programPilihan: "",
  jadwalPilihan: "",
  catatanTambahan: "",
};

const programOptions = [
  "TKA Reguler (2x Seminggu)",
  "TKA Intensif (4x Seminggu)",
  "TKA Weekend (Sabtu–Minggu)",
  "TKA Private (Jadwal Fleksibel)",
];

const kelasOptions = [
  "TK A / TK B",

  "Kelas 1 SD",
  "Kelas 2 SD",
  "Kelas 3 SD",
  "Kelas 4 SD",
  "Kelas 5 SD",
  "Kelas 6 SD",

  "Kelas 7 SMP",
  "Kelas 8 SMP",
  "Kelas 9 SMP",

  "Kelas 10 SMA",
  "Kelas 11 SMA",
  "Kelas 12 SMA",
];
const jadwalOptions = [
  "Pagi (07.00 – 09.00)",
  "Siang (10.00 – 12.00)",
  "Sore (14.00 – 16.00)",
  "Sore Akhir (16.00 – 18.00)",
];

export default function DaftarPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/daftar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Terjadi kesalahan. Coba lagi.");
        return;
      }

      window.open(data.waUrl, "_blank");

      router.push(
        `/daftar/sukses?nama=${encodeURIComponent(
          form.namaLengkap,
        )}&cs=${encodeURIComponent(data.cs.nama)}`,
      );
    } catch {
      setError("Gagal terhubung ke server. Periksa koneksi internet kamu.");
    } finally {
      setLoading(false);
    }
  };

  const isComplete =
    form.namaLengkap &&
    form.tanggalLahir &&
    form.jenisKelamin &&
    form.namaOrtu &&
    form.noHp &&
    form.kelas &&
    form.programPilihan &&
    form.jadwalPilihan;

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#eaf4ff]
      ">
      {/* BACKGROUND AMBIENT LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-44
          top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#4DA3FF]/14
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-20
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#FAAE17]/10
          blur-3xl
        "
      />

      {/* =========================================================
          HEADER
      ========================================================= */}
      <div
        className="
          relative
          overflow-hidden
          px-4
          pb-16
          pt-28
          text-center
        "
        style={{
          background:
            "linear-gradient(155deg, #056fcb 0%, #0459ad 48%, #033790 100%)",
        }}>
        {/* HEADER REFRACTION */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-24
            -top-32
            h-72
            w-72
            rounded-full
            bg-white/12
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-32
            -right-20
            h-72
            w-72
            rounded-full
            bg-[#4DA3FF]/24
            blur-3xl
          "
        />

        {/* BADGE */}
        <div
          className="
            relative
            z-10
            mb-4
            inline-flex
            items-center
            justify-center
            overflow-hidden
            rounded-full

            border
            border-white/35

            px-5
            py-1.5

            text-xs
            font-bold
            tracking-wide
            text-[#033790]

            shadow-[0_8px_22px_rgba(80,55,0,0.18),inset_0_1px_0_rgba(255,255,255,0.65)]

            backdrop-blur-[16px]
            backdrop-saturate-[180%]
          "
          style={{
            background: "linear-gradient(135deg, #FFD447 0%, #FAAE17 100%)",
          }}>
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[12%]
              top-0
              h-[45%]
              rounded-b-[80%]
              bg-linear-to-b
              from-white/40
              to-transparent
            "
          />

          <span className="relative z-10">Program TKA</span>
        </div>

        <h1 className="relative z-10 mb-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
          Formulir Pendaftaran
        </h1>

        <p className="relative z-10 mx-auto max-w-xl text-sm leading-relaxed text-blue-100 md:text-base">
          Isi data di bawah dengan lengkap. Setelah submit, kamu akan langsung
          terhubung ke CS kami via WhatsApp.
        </p>
      </div>

      {/* =========================================================
          FORM CARD
      ========================================================= */}
      <div className="relative z-10 mx-auto -mt-7 max-w-2xl px-4 pb-20">
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]

            border
            border-white/55

            p-6

            shadow-[0_24px_60px_rgba(0,45,105,0.18),0_8px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(4,57,125,0.05)]

            backdrop-blur-[28px]
            backdrop-saturate-[185%]

            md:p-10
          "
          style={{
            background: [
              "linear-gradient(145deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.84) 45%, rgba(244,250,255,0.78) 100%)",
              "rgba(255,255,255,0.86)",
            ].join(", "),
          }}>
          {/* TOP SPECULAR */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[8%]
              top-0
              z-20
              h-px
              bg-linear-to-r
              from-transparent
              via-white
              to-transparent
            "
          />

          {/* LEFT REFLECTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-24
              -top-24
              h-56
              w-72
              rounded-full
              bg-white/65
              blur-3xl
            "
          />

          {/* BLUE REFRACTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-28
              -right-20
              h-64
              w-72
              rounded-full
              bg-[#4DA3FF]/10
              blur-3xl
            "
          />

          <div className="relative z-10">
            <SectionTitle icon="👤" title="Data Siswa" />

            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <Field
                  label="Nama Lengkap Siswa"
                  name="namaLengkap"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={form.namaLengkap}
                  onChange={handleChange}
                  required
                />
              </div>

              <Field
                label="Tempat Lahir"
                name="tempatLahir"
                type="text"
                placeholder="Contoh: Yogyakarta"
                value={form.tempatLahir}
                onChange={handleChange}
              />

              <Field
                label="Tanggal Lahir"
                name="tanggalLahir"
                type="date"
                value={form.tanggalLahir}
                onChange={handleChange}
                required
              />
            </div>

            {/* JENIS KELAMIN */}
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-semibold text-[#314b68]">
                Jenis Kelamin <span className="text-red-500">*</span>
              </label>

              <div className="flex flex-wrap gap-3">
                {["Laki-laki", "Perempuan"].map((jk) => {
                  const active = form.jenisKelamin === jk;

                  return (
                    <label
                      key={jk}
                      className={`
                        relative
                        flex
                        cursor-pointer
                        items-center
                        gap-2
                        overflow-hidden
                        rounded-full
                        border
                        px-5
                        py-2.5
                        text-sm
                        font-semibold

                        shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]

                        backdrop-blur-xl

                        transition-all
                        duration-300

                        ${
                          active
                            ? `
                              border-[#056fcb]/45
                              bg-[#056fcb]/90
                              text-white
                              shadow-[0_8px_20px_rgba(5,111,203,0.22),inset_0_1px_0_rgba(255,255,255,0.28)]
                            `
                            : `
                              border-[#056fcb]/10
                              bg-white/55
                              text-[#52697f]
                              hover:border-[#056fcb]/30
                              hover:bg-white/80
                            `
                        }
                      `}>
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value={jk}
                        checked={active}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {jk === "Laki-laki" ? "👦" : "👧"} {jk}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* ALAMAT */}
            <div className="mb-6">
              <label className="mb-1.5 block text-sm font-semibold text-[#314b68]">
                Alamat Rumah
              </label>

              <textarea
                name="alamat"
                rows={2}
                placeholder="Jl. Contoh No. 1, Kelurahan, Kecamatan, Kota"
                value={form.alamat}
                onChange={handleChange}
                className="
                  w-full
                  resize-none
                  rounded-[16px]

                  border
                  border-[#056fcb]/12

                  bg-white/58

                  px-4
                  py-3

                  text-sm
                  text-[#203b56]

                  shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(0,50,110,0.05)]

                  backdrop-blur-xl

                  outline-none

                  transition-all
                  duration-300

                  placeholder:text-[#8ba0b5]

                  focus:border-[#056fcb]/45
                  focus:bg-white/82
                  focus:ring-4
                  focus:ring-[#056fcb]/8
                "
              />
            </div>

            <Divider />

            <SectionTitle icon="👨‍👩‍👦" title="Data Orang Tua / Wali" />

            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <Field
                  label="Nama Orang Tua / Wali"
                  name="namaOrtu"
                  type="text"
                  placeholder="Nama lengkap orang tua/wali"
                  value={form.namaOrtu}
                  onChange={handleChange}
                  required
                />
              </div>

              <Field
                label="No. WhatsApp Aktif"
                name="noHp"
                type="tel"
                placeholder="08xx-xxxx-xxxx"
                value={form.noHp}
                onChange={handleChange}
                required
              />

              <Field
                label="Email (opsional)"
                name="email"
                type="email"
                placeholder="contoh@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <Divider />

            <SectionTitle icon="📚" title="Informasi Program" />

            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field
                label="Asal Sekolah"
                name="asalSekolah"
                type="text"
                placeholder="Nama sekolah saat ini"
                value={form.asalSekolah}
                onChange={handleChange}
              />

              <SelectField
                label="Kelas Saat Ini"
                name="kelas"
                options={kelasOptions}
                value={form.kelas}
                onChange={handleChange}
                required
              />

              <SelectField
                label="Program yang Dipilih"
                name="programPilihan"
                options={programOptions}
                value={form.programPilihan}
                onChange={handleChange}
                required
              />

              <SelectField
                label="Preferensi Jadwal"
                name="jadwalPilihan"
                options={jadwalOptions}
                value={form.jadwalPilihan}
                onChange={handleChange}
                required
              />
            </div>

            {/* CATATAN */}
            <div className="mb-8">
              <label className="mb-1.5 block text-sm font-semibold text-[#314b68]">
                Catatan Tambahan
              </label>

              <textarea
                name="catatanTambahan"
                rows={3}
                placeholder="Contoh: kebutuhan khusus siswa, pertanyaan, atau harapan dari program..."
                value={form.catatanTambahan}
                onChange={handleChange}
                className="
                  w-full
                  resize-none
                  rounded-[16px]

                  border
                  border-[#056fcb]/12

                  bg-white/58

                  px-4
                  py-3

                  text-sm
                  text-[#203b56]

                  shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(0,50,110,0.05)]

                  backdrop-blur-xl

                  outline-none

                  transition-all
                  duration-300

                  placeholder:text-[#8ba0b5]

                  focus:border-[#056fcb]/45
                  focus:bg-white/82
                  focus:ring-4
                  focus:ring-[#056fcb]/8
                "
              />
            </div>

            {/* ERROR */}
            {error && (
              <div
                className="
                  relative
                  mb-4
                  overflow-hidden
                  rounded-[16px]

                  border
                  border-red-300/40

                  bg-red-50/70

                  px-4
                  py-3

                  text-sm
                  font-medium
                  text-red-600

                  shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]

                  backdrop-blur-xl
                ">
                ⚠️ {error}
              </div>
            )}

            {/* WHATSAPP INFO */}
            <div
              className="
                relative
                mb-5
                flex
                items-start
                gap-3
                overflow-hidden
                rounded-[18px]

                border
                border-emerald-300/30

                bg-emerald-50/65

                px-4
                py-3

                shadow-[0_6px_16px_rgba(0,120,70,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]

                backdrop-blur-xl
              ">
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[10%]
                  top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white
                  to-transparent
                "
              />

              <span className="relative z-10 mt-0.5 text-xl">💬</span>

              <p className="relative z-10 text-sm leading-relaxed text-emerald-700">
                Setelah submit, WhatsApp akan terbuka otomatis dengan pesan yang
                sudah terisi. Kamu akan dihubungkan ke CS kami yang bertugas.
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={!isComplete || loading}
              className={`
                group
                relative

                flex
                w-full
                items-center
                justify-center

                overflow-hidden
                rounded-full

                border

                py-4

                text-base
                font-bold

                transition-all
                duration-300

                ${
                  isComplete && !loading
                    ? `
                      border-white/30
                      bg-[#056fcb]
                      text-white

                      shadow-[0_12px_30px_rgba(5,111,203,0.26),inset_0_1px_0_rgba(255,255,255,0.30)]

                      hover:-translate-y-0.5
                      hover:bg-[#0467bd]
                      hover:shadow-[0_16px_36px_rgba(5,111,203,0.32),inset_0_1px_0_rgba(255,255,255,0.38)]

                      active:translate-y-0
                      active:scale-[0.99]
                    `
                    : `
                      cursor-not-allowed
                      border-white/35
                      bg-slate-200/70
                      text-slate-400
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
                    `
                }
              `}>
              {isComplete && !loading && (
                <>
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-[12%]
                      top-0
                      h-[42%]
                      rounded-b-[80%]
                      bg-linear-to-b
                      from-white/20
                      to-transparent
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-6
                      right-[10%]
                      h-12
                      w-28
                      rounded-full
                      bg-[#4DA3FF]/20
                      blur-xl
                    "
                  />
                </>
              )}

              <span className="relative z-10">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Memproses...
                  </span>
                ) : (
                  "Daftar & Hubungi CS via WhatsApp"
                )}
              </span>
            </button>

            <p className="mt-4 text-center text-xs text-[#8497aa]">
              Data kamu aman dan hanya digunakan untuk keperluan pendaftaran.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center

          rounded-[14px]

          border
          border-[#056fcb]/10

          bg-[#056fcb]/7

          text-xl

          shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]

          backdrop-blur-xl
        ">
        {icon}
      </div>

      <h2 className="text-base font-bold text-[#056fcb]">{title}</h2>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative my-6 h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#056fcb]/12 to-transparent" />
      <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-white/80" />
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-[#314b68]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-[16px]

          border
          border-[#056fcb]/12

          bg-white/58

          px-4
          py-3

          text-sm
          text-[#203b56]

          shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_4px_12px_rgba(0,50,110,0.05)]

          backdrop-blur-xl

          outline-none

          transition-all
          duration-300

          placeholder:text-[#8ba0b5]

          focus:border-[#056fcb]/45
          focus:bg-white/82
          focus:ring-4
          focus:ring-[#056fcb]/8
        "
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-[#314b68]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div
        className="
          group
          relative
          overflow-hidden

          rounded-[16px]

          border
          border-[#056fcb]/15

          bg-white/60

          shadow-[0_5px_16px_rgba(0,50,110,0.06),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(5,111,203,0.03)]

          backdrop-blur-[18px]
          backdrop-saturate-[180%]

          transition-all
          duration-300

          focus-within:border-[#056fcb]/45
          focus-within:bg-white/82
          focus-within:shadow-[0_8px_22px_rgba(5,111,203,0.10),0_0_0_4px_rgba(5,111,203,0.07),inset_0_1px_0_rgba(255,255,255,1)]
        ">
        {/* TOP GLASS REFLECTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[8%]
            right-[8%]
            top-0
            z-10

            h-px

            bg-linear-to-r
            from-transparent
            via-white
            to-transparent
          "
        />

        {/* SOFT LEFT REFLECTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-6
            -top-8

            h-16
            w-28

            rotate-[-15deg]
            rounded-full

            bg-white/45
            blur-xl
          "
        />

        {/* BLUE REFRACTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-7
            right-4

            h-12
            w-24

            rounded-full

            bg-[#4DA3FF]/10
            blur-xl

            transition-all
            duration-300

            group-focus-within:bg-[#4DA3FF]/16
          "
        />

        {/* INNER GLASS EDGE */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]

            rounded-[15px]

            border
            border-white/35
          "
        />

        <select
          name={name}
          value={value}
          onChange={onChange}
          className="
            relative
            z-10

            w-full
            cursor-pointer
            appearance-none

            bg-transparent

            px-4
            py-3
            pr-12

            text-sm
            font-medium
            text-[#203b56]

            outline-none

            transition-all
            duration-300
          ">
          <option value="">-- Pilih --</option>

          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        {/* LIQUID GLASS ARROW BUTTON */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            right-2
            top-1/2
            z-20

            flex
            h-8
            w-8

            -translate-y-1/2

            items-center
            justify-center

            overflow-hidden
            rounded-[11px]

            border
            border-white/50

            bg-white/55

            shadow-[0_3px_10px_rgba(0,50,110,0.08),inset_0_1px_0_rgba(255,255,255,1)]

            backdrop-blur-xl

            transition-all
            duration-300

            group-focus-within:border-[#056fcb]/20
            group-focus-within:bg-white/75
          ">
          {/* ARROW GLASS REFLECTION */}
          <span
            className="
              pointer-events-none
              absolute
              inset-x-1
              top-0

              h-[45%]

              rounded-b-full

              bg-linear-to-b
              from-white/90
              to-transparent
            "
          />

          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="
              relative
              z-10
              h-4
              w-4

              text-[#52718f]

              transition-transform
              duration-300

              group-focus-within:text-[#056fcb]
            ">
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
