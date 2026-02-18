export default function Adatvedelem() {
  return (
    <main className="max-w-3xl mx-auto p-12">
      <h1 className="text-3xl font-bold mb-6">Adatkezelési tájékoztató</h1>

      <p className="text-gray-700 mb-4">
        A Capio (a továbbiakban: “Szolgáltató”) elkötelezett a személyes adatok védelme mellett.
        Ez a tájékoztató összefoglalja, hogyan kezeljük a weboldal használata során keletkező adatokat.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Adatkezelő</h2>
      <p className="text-gray-700">Név: Capio</p>
      <p className="text-gray-700">Kapcsolat: hello@capio.hu</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Milyen adatokat kezelünk?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Technikai adatok (pl. böngésző típusa, eszköz, IP-cím naplózhatósága a szolgáltatónál).</li>
        <li>Kapcsolatfelvételi adatok, ha írsz nekünk (pl. email).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Miért kezeljük?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>A weboldal működtetése, biztonsága.</li>
        <li>Kapcsolattartás, megkeresések megválaszolása.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Sütik (cookie-k)</h2>
      <p className="text-gray-700">
        A weboldal alap működéséhez szükséges sütiket használhat. Ha később analytics vagy marketing eszköz kerül be,
        külön tájékoztatást adunk és (szükség esetén) hozzájárulást kérünk.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Érintetti jogok</h2>
      <p className="text-gray-700">
        Kérheted a személyes adataidhoz való hozzáférést, azok helyesbítését, törlését, kezelésének korlátozását,
        vagy tiltakozhatsz az adatkezelés ellen. Írj: hello@capio.hu
      </p>

      <p className="text-gray-500 mt-10 text-sm">
        Utolsó frissítés: 2026-02-18
      </p>
    </main>
  )
}
