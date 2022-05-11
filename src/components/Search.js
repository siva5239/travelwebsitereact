import React from 'react'
import './Search.css'
import Gold from '../assets/gold.jpeg'
const Search = () => {
    return (
        <div name="book" className='search'>
            <div className='container'>
                <div className='left'>
                    <h2>Luxury Included Vacations For Two People</h2>
                    <p>Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at Sandals Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and PADI® certified scuba diving at most resorts. If you are planning a wedding, Sandals is the leader in Caribbean destination weddings and honeymoon packages.</p>
                    <div className='search-col-2'>
                        <div className='box'>
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h1>World's Leading</h1>
                                <p>All-Inclusive Company For 20 Years In-A-Row</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div>
                                <h3>No One Includes More</h3>
                                <p>All-Inclusive Company For 20 Years In-A-Row</p>
                                <button>ViewPackages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='promo'>
                        <h4 className='save'>Get An Additional 7% Off</h4>
                        <p className='timer'>12 Hours Left</p>
                        <p className='offers'>View All Current Offers</p>

                    </div>
                    <form>
                        <div className='input-wrap'>
                            <label>Destinations</label>
                            <select>
                                <option value="1">Grande Antique</option>
                                <option value="2">Gradne</option>
                                <option value="3">Emerald Bay</option>
                                <option value="4">Bora Bora</option>
                                <option value="4">Key West</option>

                            </select>
                        </div>
                        <div className='date'>
                            <div className='input-wrap'>
                                <label>Check in</label>
                                <input type='date' />
                            </div>
                            <div className='input-wrap'>
                                <label>Check out</label>
                                <input type='date' />
                            </div>
                        </div>
                        <button>Rates & Availabilities</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Search