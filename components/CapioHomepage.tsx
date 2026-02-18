"use client"

import { useState } from "react"

export default function CapioHomepage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: "Mi az a Capio?",
      a: "A Capio egy elemzésközpontú magyar médium, amely közérthetően tárgyalja a politika, gazdaság, természettudomány és kultúra összefüggéseit.",
    },
    {
      q: "Miért jött létre?",
      a: "Mert Magyarországon sok az információ, de kevés a valódi megértést adó, strukturált elemzés.",
    },
    {
      q: "Mi az Aevorex szerepe?",
      a: "Az Aevorex megbízható adat- és számítási infrastruktúrát biztosít, amelyre a Capio elemzései épülnek.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Capio — Tisztábban látni
          </h1>
          <p className="text-gray-600">
            Politika, gazdaság, természettudomány és kultúra
            közérthető, mély elemzése.
          </p>
        </section>

        {/* KATEGÓRIA GOMBOK */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <a href="/politika" className="bg-white border p-8 rounded-lg hover:shadow transition">
            <h2 className="text-xl font-semibold">Politika</h2>
          </a>

          <a href="/gazdasag" className="bg-white border p-8 rounded-lg hover:shadow transition">
            <h2 className="text-xl font-semibold">Gazdaság</h2>
          </a>

          <a href="/termeszettudomany" className="bg-white border p-8 rounded-lg hover:shadow transition">
            <h2 className="text-xl font-semibold">Természettudomány</h2>
          </a>

          <a href="/kultura" className="bg-white border p-8 rounded-lg hover:shadow transition">
            <h2 className="text-xl font-semibold">Kultúra</h2>
          </a>
        </section>

        {/* KIK VAGYUNK */}
        <section className="bg-white border p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Kik vagyunk és miért csináljuk
          </h2>
          <p className="text-gray-600">
            A Capio célja, hogy strukturált, közérthető és adatvezérelt
            elemzéseken keresztül segítse a társadalmi és gazdasági
            folyamatok mélyebb megértését.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Gyakran ismételt kérdések
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border rounded-lg">
                <button
                  className="w-full text-left p-4 font-medium"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                >
                  {faq.q}
                </button>

                {openFaq === index && (
                  <div className="p-4 pt-0 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>      

      <footer className="border-t bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <a href="/impresszum" className="hover:underline">Impresszum</a>
            <a href="/adatvedelem" className="hover:underline">Adatvédelem</a>
          </div>

          <div className="text-gray-500">
            © {new Date().getFullYear()} Capio
          </div>
        </div>
      </footer>
    </div>
  )
}
