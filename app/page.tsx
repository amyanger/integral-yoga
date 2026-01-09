export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-800">Sri Aurobindo & The Mother</h1>
            <div className="space-x-6">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition">About</a>
              <a href="#teachings" className="text-gray-700 hover:text-orange-600 transition">Teachings</a>
              <a href="#legacy" className="text-gray-700 hover:text-orange-600 transition">Legacy</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            The Divine Life
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Exploring the profound teachings and spiritual vision of Sri Aurobindo and The Mother,
            pioneers of Integral Yoga and the transformation of human consciousness.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Sri Aurobindo</h3>
              <p className="text-gray-700 mb-4">
                Sri Aurobindo (1872-1950) was an Indian philosopher, yogi, maharishi, poet, and Indian nationalist.
                He was also a journalist, editing newspapers such as Vande Mataram.
              </p>
              <p className="text-gray-700 mb-4">
                He developed a spiritual practice he called Integral Yoga, which aims to transform all aspects
                of human nature and establish a divine life on Earth. His major works include
                &ldquo;The Life Divine,&rdquo; &ldquo;The Synthesis of Yoga,&rdquo; and &ldquo;Savitri.&rdquo;
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-orange-700 mb-2">Key Contributions:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Development of Integral Yoga</li>
                  <li>Philosophy of Spiritual Evolution</li>
                  <li>Vision of the Supramental Transformation</li>
                  <li>Synthesis of Eastern and Western thought</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-orange-800 mb-4">The Mother</h3>
              <p className="text-gray-700 mb-4">
                The Mother, Mirra Alfassa (1878-1973), was a French spiritual guru and the spiritual collaborator
                of Sri Aurobindo. She founded the Sri Aurobindo Ashram and established Auroville,
                an experimental township in South India.
              </p>
              <p className="text-gray-700 mb-4">
                She was responsible for the practical application of Sri Aurobindo&apos;s vision, organizing the ashram
                and guiding thousands of disciples. Her profound spiritual realizations and her work in bringing
                down the Supramental consciousness made her a unique figure in modern spiritual history.
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-orange-700 mb-2">Key Contributions:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Establishment of Sri Aurobindo Ashram (1926)</li>
                  <li>Founding of Auroville (1968)</li>
                  <li>Development of Integral Education</li>
                  <li>Practical guidance for spiritual transformation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Teachings Section */}
        <section id="teachings" className="mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Core Teachings</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg p-6 shadow-md">
              <h4 className="text-2xl font-bold text-orange-800 mb-3">Integral Yoga</h4>
              <p className="text-gray-700">
                A comprehensive spiritual practice that seeks to transform all aspects of being -
                physical, vital, mental, and spiritual - to manifest the Divine in earthly life.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg p-6 shadow-md">
              <h4 className="text-2xl font-bold text-orange-800 mb-3">Supramental Descent</h4>
              <p className="text-gray-700">
                The vision of a new consciousness beyond the mind, a divine consciousness that can
                transform human nature and establish a life divine on Earth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg p-6 shadow-md">
              <h4 className="text-2xl font-bold text-orange-800 mb-3">Evolutionary Spirituality</h4>
              <p className="text-gray-700">
                The understanding that evolution is not merely physical but spiritual, with humanity
                destined to evolve into a divine race through conscious participation.
              </p>
            </div>
          </div>
        </section>

        {/* Quotes Section */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Inspiring Words</h3>
          <div className="space-y-8">
            <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-700">
              <p className="text-lg mb-2">
                &ldquo;All life is yoga.&rdquo;
              </p>
              <footer className="text-orange-800 font-semibold">— Sri Aurobindo</footer>
            </blockquote>
            <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-700">
              <p className="text-lg mb-2">
                &ldquo;True love is not an emotional outburst but a constant and luminous consciousness.&rdquo;
              </p>
              <footer className="text-orange-800 font-semibold">— The Mother</footer>
            </blockquote>
            <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-700">
              <p className="text-lg mb-2">
                &ldquo;The spiritual journey does not consist in arriving at a new destination where a person gains
                what they did not have, or becomes what they are not. It consists in the dissipation of one&apos;s
                own ignorance concerning oneself and life, and the gradual growth of that understanding which
                begins the spiritual awakening.&rdquo;
              </p>
              <footer className="text-orange-800 font-semibold">— Sri Aurobindo</footer>
            </blockquote>
          </div>
        </section>

        {/* Legacy Section */}
        <section id="legacy" className="mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Living Legacy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-800 mb-4">Sri Aurobindo Ashram</h4>
              <p className="text-gray-700 mb-4">
                Located in Pondicherry, India, the ashram continues to be a vibrant spiritual community
                where seekers from around the world come to practice Integral Yoga and study the teachings.
              </p>
              <p className="text-gray-700">
                The ashram maintains the Samadhi (tomb) of Sri Aurobindo and The Mother, a place of
                pilgrimage and meditation for thousands of visitors annually.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-bold text-orange-800 mb-4">Auroville</h4>
              <p className="text-gray-700 mb-4">
                Auroville is an experimental township founded in 1968 by The Mother, dedicated to human unity
                and the realization of a divine consciousness in matter. It is home to people from over 50 nations.
              </p>
              <p className="text-gray-700">
                The Matrimandir, a golden sphere at the center of Auroville, serves as a place for
                individual silent concentration and is a symbol of the Divine&apos;s answer to humanity&apos;s aspiration.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &ldquo;The only true choice is between a progressive illumination and a progressive obscurity.&rdquo; - Sri Aurobindo
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
