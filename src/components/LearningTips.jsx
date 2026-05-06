export default function LearningTips() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Learning Tips</h2>
          <p className="text-gray-500 mt-2">
            Improve your study habits and manage your time effectively
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Study Techniques */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">📘 Study Techniques</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Break study sessions into small chunks</li>
              <li>✔ Use active recall and spaced repetition</li>
              <li>✔ Take short breaks (Pomodoro method)</li>
              <li>✔ Practice with real-world examples</li>
            </ul>
          </div>

          {/* Time Management */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">⏳ Time Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Set clear daily goals</li>
              <li>✔ Prioritize important tasks first</li>
              <li>✔ Avoid distractions while studying</li>
              <li>✔ Track your progress regularly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
