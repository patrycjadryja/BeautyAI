import { useState } from 'react'

const dummyData = [
  { name: 'Joanna', sprzedaż: 12000 },
  { name: 'Magda', sprzedaż: 18500 },
  { name: 'Agnieszka', sprzedaż: 10200 }
]

export default function Dashboard() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('Tutaj pojawi się odpowiedź AI na Twoje pytanie.')

  return (
    <div className="grid grid-cols-5 min-h-screen bg-[#0d0d0d] text-white font-sans">
      {/* Sidebar */}
      <div className="bg-[#1a1a1a] p-6 col-span-1 border-r border-[#333]">
        <h2 className="text-2xl font-bold text-purple-400 mb-10">BeautyAI</h2>
        <ul className="space-y-6 text-base">
          <li>📊 <span className="text-purple-300">Dashboard</span></li>
          <li>👥 Zespół</li>
          <li>💼 Sprzedaż</li>
          <li>🧠 AI Asystent</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="col-span-4 p-10 space-y-10">
        <div className="text-center">
          <div className="text-4xl font-bold mb-4">Witaj Patrycja</div>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
            Zadaj pytanie
          </button>
        </div>

        <div className="bg-[#1f1f1f] p-6 rounded-lg space-y-4">
          <h2 className="text-lg font-semibold">Zadaj pytanie Asystentowi AI</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Dlaczego Joanna sprzedała mniej?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="bg-[#333] text-white p-2 rounded w-full"
            />
            <button
              onClick={() => setResponse('Symulowana odpowiedź AI...')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
            >
              Zapytaj
            </button>
          </div>
          <div className="bg-[#2a2a2a] p-4 rounded text-sm">{response}</div>
        </div>

        <div className="bg-[#1f1f1f] p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Wyniki sprzedażowe zespołu</h2>
          <ul className="space-y-1 text-sm">
            {dummyData.map((entry) => (
              <li key={entry.name}>
                {entry.name}: {entry.sprzedaż} zł
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}