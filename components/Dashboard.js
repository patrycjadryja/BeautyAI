import { useState } from 'react'

const dummyData = [
  { name: 'Joanna', sprzedaż: 12000 },
  { name: 'Magda', sprzedaż: 18500 },
  { name: 'Agnieszka', sprzedaż: 10200 }
]

export default function Dashboard() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('Tutaj pojawi się odpowiedź AI na Twoje pytanie.')

  const handleAskAI = async () => {
    setResponse('Analiza danych pokazuje, że Joanna miała mniej wizyt przez brak cross-sellingu i słabą dostępność terminów.')
  }

  return (
    <div className="grid grid-cols-5 min-h-screen">
      <div className="bg-gray-100 p-4 col-span-1 border-r border-gray-200">
        <h2 className="text-xl font-bold mb-6">BeautyAI</h2>
        <ul className="space-y-4">
          <li className="font-medium">📊 Dashboard</li>
          <li>👥 Zespół</li>
          <li>💼 Sprzedaż</li>
          <li>🧠 AI Asystent</li>
        </ul>
      </div>
      <div className="col-span-4 p-8 space-y-8">
        <h1 className="text-2xl font-bold">Panel Zarządzania Kliniką</h1>
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-lg font-semibold">Zadaj pytanie Asystentowi AI</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Dlaczego Joanna sprzedała mniej w marcu?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
            />
            <button
              onClick={handleAskAI}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Zapytaj
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded text-sm text-gray-700">
            {response}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Wyniki sprzedażowe zespołu</h2>
          <ul>
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