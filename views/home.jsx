const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/chia-food-dessert.jpg" alt="Chia Fruit Shake"></img>
                    Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
            </main>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>

        </Def>
    )
}

module.exports = home