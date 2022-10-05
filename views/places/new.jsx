const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
        if (data.message) {
            message = (
                <h4 className="alert-danger">
                    {data.message} 
                </h4>
            )
        }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form method ="POST" action="/places">
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id ="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id="pic" name="pic" required />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" required />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input id="state" name="state" required />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group">
                        <label for="founded">Founded Year</label>
                        <input 
                        type="number"
                        className="form-control" 
                        id="founded" 
                        name="founded"
                        value={new Date().getFullYear} />
                    </div>
                    <div>
                        <input type="submit" value="Add Place" />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form