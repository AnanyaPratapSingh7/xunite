import Link from 'next/link';

export default function AnanyaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 text-white relative overflow-hidden">
      {/* Water-themed Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bubbles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-60 left-1/4 w-5 h-5 bg-cyan-300/50 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-blue-300/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
        <div className="absolute top-32 left-2/3 w-4 h-4 bg-cyan-400/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        {/* Water Ripples */}
        <div className="absolute top-1/4 left-1/6 w-8 h-8 border-2 border-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-10 h-10 border-2 border-cyan-300/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        
        {/* Water Orbs */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="py-6 px-4 border-b border-cyan-400/20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-105 group"
          >
            <svg className="w-5 h-5 mr-2 animate-pulse group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Xunite
          </Link>
        </div>
      </header>

      {/* Squirtle Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Squirtle Image */}
          <div className="mb-8">
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
              alt="Squirtle"
              className="w-48 h-48 mx-auto rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-400/50 hover:scale-110 transition-all duration-300"
            />
          </div>
          
          {/* Squirtle Info */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-cyan-400 animate-pulse">
            Squirtle
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-2">
            #007 • Tiny Turtle Pokémon
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Water Type • Height: 0.5m • Weight: 9.0kg
          </p>
          
          {/* Type Badges */}
          <div className="flex justify-center gap-4 mb-12">
            <span className="px-6 py-2 bg-blue-600 rounded-full text-white font-semibold shadow-lg">
              💧 Water
            </span>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              When it retracts its long neck into its shell, it squirts out water with vigorous force. 
              It can be found in freshwater ponds and lakes, where it hunts for small aquatic creatures.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Chain */}
      <section className="py-20 px-4 bg-black/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400">
            Evolution Chain
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Squirtle */}
            <div className="text-center">
              <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
                alt="Squirtle"
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-cyan-400 shadow-lg hover:scale-110 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Squirtle</h3>
              <p className="text-gray-300">Level 1</p>
            </div>
            
            {/* Evolution Arrow */}
            <div className="text-center">
              <div className="text-4xl text-cyan-400 animate-pulse">→</div>
              <p className="text-sm text-gray-400 mt-2">Level 16</p>
            </div>
            
            {/* Wartortle */}
            <div className="text-center">
              <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
                alt="Wartortle"
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-blue-400 shadow-lg hover:scale-110 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Wartortle</h3>
              <p className="text-gray-300">Level 16</p>
            </div>
            
            {/* Evolution Arrow */}
            <div className="text-center">
              <div className="text-4xl text-blue-400 animate-pulse">→</div>
              <p className="text-sm text-gray-400 mt-2">Level 36</p>
            </div>
            
            {/* Blastoise */}
            <div className="text-center">
              <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
                alt="Blastoise"
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-blue-500 shadow-lg hover:scale-110 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold text-blue-500 mb-2">Blastoise</h3>
              <p className="text-gray-300">Level 36</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Abilities */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400">
            Base Stats & Abilities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Base Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Base Stats</h3>
              <div className="space-y-4">
                {[
                  { stat: 'HP', value: 44, color: 'bg-red-500' },
                  { stat: 'Attack', value: 48, color: 'bg-orange-500' },
                  { stat: 'Defense', value: 65, color: 'bg-yellow-500' },
                  { stat: 'Sp. Atk', value: 50, color: 'bg-purple-500' },
                  { stat: 'Sp. Def', value: 64, color: 'bg-green-500' },
                  { stat: 'Speed', value: 43, color: 'bg-blue-500' }
                ].map((item, index) => (
                  <div key={item.stat} className="flex items-center gap-4">
                    <span className="w-16 text-sm font-semibold text-gray-300">{item.stat}</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-3">
                      <div 
                        className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                        style={{ width: `${(item.value / 100) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-sm font-bold text-gray-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Abilities */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Abilities</h3>
              <div className="space-y-6">
                <div className="p-4 bg-blue-600/20 rounded-lg border border-blue-400/30">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Torrent</h4>
                  <p className="text-gray-300 text-sm">
                    Powers up Water-type moves when the Pokémon's HP is low.
                  </p>
                </div>
                <div className="p-4 bg-green-600/20 rounded-lg border border-green-400/30">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Rain Dish (Hidden)</h4>
                  <p className="text-gray-300 text-sm">
                    The Pokémon gradually regains HP in rain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moves */}
      <section className="py-20 px-4 bg-black/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400">
            Signature Moves
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Water Gun',
                type: 'Water',
                power: '40',
                accuracy: '100%',
                description: 'Squirts water at the target with great force.',
                color: 'blue'
              },
              {
                name: 'Bubble',
                type: 'Water',
                power: '40',
                accuracy: '100%',
                description: 'A spray of countless bubbles is jetted at the opposing team.',
                color: 'cyan'
              },
              {
                name: 'Withdraw',
                type: 'Normal',
                power: '—',
                accuracy: '—',
                description: 'Withdraws into its shell, raising its Defense stat.',
                color: 'gray'
              },
              {
                name: 'Tackle',
                type: 'Normal',
                power: '40',
                accuracy: '100%',
                description: 'A physical attack in which the user charges and slams into the target.',
                color: 'gray'
              },
              {
                name: 'Bite',
                type: 'Dark',
                power: '60',
                accuracy: '100%',
                description: 'The target is bitten with viciously sharp fangs.',
                color: 'purple'
              },
              {
                name: 'Aqua Jet',
                type: 'Water',
                power: '40',
                accuracy: '100%',
                description: 'The user lunges at the target at a speed that makes it almost invisible.',
                color: 'blue'
              }
            ].map((move, index) => (
              <div key={move.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {move.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-${move.color}-600`}>
                    {move.type}
                  </span>
                </div>
                <div className="flex gap-4 mb-3 text-sm">
                  <span className="text-gray-400">Power: <span className="text-white font-semibold">{move.power}</span></span>
                  <span className="text-gray-400">Accuracy: <span className="text-white font-semibold">{move.accuracy}</span></span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {move.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400">
            Fun Facts About Squirtle
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">🐢 Origins</h3>
              <p className="text-gray-300 leading-relaxed">
                Squirtle is based on a turtle, specifically the red-eared slider. Its name comes from "squirt" and "turtle", 
                and its Japanese name "Zenigame" means "money turtle".
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">💧 Water Master</h3>
              <p className="text-gray-300 leading-relaxed">
                Squirtle can shoot water from its mouth with incredible accuracy and force. 
                It's said to be able to hit a target from 50 feet away!
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">🛡️ Shell Defense</h3>
              <p className="text-gray-300 leading-relaxed">
                When threatened, Squirtle can retract its head, legs, and tail into its shell, 
                making it nearly invulnerable to attacks.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">🌟 Starter Pokémon</h3>
              <p className="text-gray-300 leading-relaxed">
                Squirtle is one of the three starter Pokémon from the Kanto region, 
                alongside Bulbasaur and Charmander. It's the water-type choice!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-cyan-400/20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-2 hover:text-white transition-colors duration-300">
            Squirtle Squad Forever! 💙🐢
          </p>
          <p className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
            "With great shell comes great responsibility!" 🛡️
          </p>
        </div>
      </footer>
    </div>
  );
} 