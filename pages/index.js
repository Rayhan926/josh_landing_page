import TwitterIcon from '../icons/TwitterIcon'
import DiscordIcon from '../icons/DiscordIcon'
function Home() {
  return (
    <div className="bg-black font-roboto-mono" >
      <div className="container max-w-4xl lg:mx-auto text-white pt-20 text-center">
        <h1 className="font-bold text-5xl mb-4" >Your Logo</h1>
        <p className="text-white/70" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quasi.</p>
      </div>
      <div className="overflow-hidden text-white pt-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/tshirt_bg.png')",
          backgroundSize: '100%',
          backgroundPosition: 'top'
        }}
      >
        <div className="max-w-4xl lg:mx-auto">
          <div className="w-full h-full mx-auto">
            <div className="relative h-full py-4 overflow-hidden wrap px-8">
              <div className="absolute h-[97%] border-2 rounded-l-lg top-4 border-red-500 left-11 md:left-auto md:right-1/2 border-2-2" />
              <div className="absolute h-[97%] border-2 rounded-r-lg top-4 border-red-500 left-12 md:left-1/2 border-2-2" />
              <section className="relative flex justify-between w-full mb-8 items-center md:flex-row-reverse">
                <div className="order-1 w-1/12 md:w-5/12" />
                <div className="order-1 w-10/12 px-1 py-4 text-left md:w-5/12">
                  <p className="mb-1 text-lg sm:text-1xl after:left-4 md:after:left-1/2 text-left">2021 Q3 COMPLETE</p>
                  <p className="text-lg sm:text-3xl after:left-4 md:after:left-1/2 text-left text-red-600 font-bold">Sept.</p>
                  <p className="mt-4 text-red-500 text-base sm:text-xl font-bold">Fair Launch</p>
                  <div className="divide-y-[1px] divide-red-700">
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Fair launch of the $MAGIC token via NFT staking</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Fractionalisation of Treasure Bags</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>&gt;80% of MAGIC locked in single sided staking contract to earn Legion NFTs</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Novel approaches to incentivise LP and abstract away complexity (as an access key)</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Introduced and educated a new wave of users to DeFi</p></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative flex justify-between w-full mb-8 items-center">
                <div className="order-1 w-1/12 md:w-5/12" />
                <div className="order-1 w-10/12 px-1 py-4 text-left md:w-5/12">
                  <p className="mb-1 text-lg sm:text-1xl after:left-4 md:after:left-1/2 text-left">2021 Q4</p>
                  <p className="text-lg sm:text-3xl after:left-4 md:after:left-1/2 text-left text-red-600 font-bold">Oct.</p>
                  <p className="mt-4 text-red-500 text-base sm:text-xl font-bold">Migration to Arbitrum</p>
                  <div className="divide-y-[1px] divide-red-700">
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Migrated ~88m MAGIC to Arbitrum via our migration contract (one of the first to actively move from ETH L1)</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose">
                        <p>Creation of hundreds of detailed artworks and minting thousands of NFTs on Arbitrum (i.e., Treasures, Legions, Rivermen, Numeraires, Seeds of Life and special keys)</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Announced MAGIC-OHM pair for Arbitrum</p></div>
                    </div>
                  </div>
                  <p className="mt-4 text-red-500 text-base sm:text-xl font-bold">Genesis Mine on Arbitrum</p>
                  <div className="divide-y-[1px] divide-red-700">
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>First dual staking mine - MAGIC (ERC20) + Treasures (ERC1155)</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>78% of circulating supply committed to our Genesis mine for between 2 weeks and 3 months (TVL of ~$33m USD)</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Regular top 10 liquidity pair on Sushiswap with &gt;$3m liquidity</p></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative flex justify-between w-full mb-8 items-center md:flex-row-reverse">
                <div className="order-1 w-1/12 md:w-5/12" />
                <div className="order-1 w-10/12 px-1 py-4 text-left md:w-5/12">
                  <p className="mb-1 text-lg sm:text-1xl after:left-4 md:after:left-1/2 text-left">2021 Q4</p>
                  <p className="text-lg sm:text-3xl after:left-4 md:after:left-1/2 text-left text-red-600 font-bold">Nov./Dec.</p>
                  <p className="mt-4 text-red-500 text-base sm:text-xl font-bold">Governance and Marketplace</p>
                  <div className="divide-y-[1px] divide-red-700">
                    <div className="p-4">
                      <div className="text-sm leading-snug prose">
                        <p>Launch of TreasureDAO and the first fair NFT ‘governance model’ - only veMAGIC holders and LP can vote where weight of veMAGIC adjusted based on lock (gMAGIC)</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>First all token standard NFT marketplace on Arbitrum</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Smol Brain collection launched with 3m MAGIC volume in first 3 days</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Several integrations in the works - LIFE, Getting Bodied, ???, ???</p></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="max-w-md -my-16 relative z-10 m-auto text-left sm:text-center ml-3.5 sm:ml-[auto]">
          <div className="text-base sm:text-xl text-black font-bold inline-block bg-white p-4"><p>2022</p></div>
        </div>
        <div className="max-w-4xl lg:mx-auto">
          <div className="w-full h-full mx-auto">
            <div className="relative h-full overflow-hidden wrap px-8">
              <div className="absolute h-[97%] border-2 rounded-l-lg top-10 border-red-500 left-11 md:left-auto md:right-1/2 border-2-2" />
              <div className="absolute h-[97%] border-2 rounded-r-lg top-10 border-red-500 left-12 md:left-1/2 border-2-2" />
              <section className="relative flex justify-between w-full mb-8 mt-16 items-center">
                <div className="order-1 w-1/12 md:w-5/12" />
                <div className="order-1 w-10/12 px-1 py-4 text-left md:w-5/12">
                  <p className="mb-1 text-lg sm:text-1xl after:left-4 md:after:left-1/2 text-left">2022</p>
                  <p className="text-lg sm:text-3xl after:left-4 md:after:left-1/2 text-left text-red-600 font-bold">Q1-Q2</p>
                  <div className="divide-y-[1px] divide-red-700">
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Partnerships</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Expand Treasure Metaverse</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Bridge Partner Ecosystems</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Bridgeworld phase 01</p></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative flex justify-between w-full mb-8 items-center md:flex-row-reverse">
                <div className="order-1 w-1/12 md:w-5/12" />
                <div className="order-1 w-10/12 px-1 py-4 text-left md:w-5/12">
                  <p className="mb-1 text-lg sm:text-1xl after:left-4 md:after:left-1/2 text-left">2022</p>
                  <p className="text-lg sm:text-3xl after:left-4 md:after:left-1/2 text-left text-red-600 font-bold">Q3-Q4</p>
                  <div className="divide-y-[1px] divide-red-700">
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Bridgeworld phase 02</p></div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm leading-snug prose"><p>Bridgeworld MVP</p></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer --Start-- */}
      <footer>
        <div className="container max-w-4xl lg:mx-auto py-6 flex items-center justify-between text-white/50">
          <a href="#" className="hover:text-white">
            <TwitterIcon />
          </a>
          <a href="#" className="hover:text-white">
            <DiscordIcon />
          </a>
        </div>
      </footer>
      {/* Footer --End-- */}
    </div>
  )
}

export default Home
