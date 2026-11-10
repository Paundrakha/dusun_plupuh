const angka = new Intl.NumberFormat("id-ID");
const persen = new Intl.NumberFormat("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export const formatAngka = (n) => angka.format(n);

export const formatPersen = (nilai, total) => (total > 0 ? `${persen.format((nilai / total) * 100)}%` : "0,0%");
