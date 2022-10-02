const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method ="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input
                                className="form-control"
                                id="name"
                                value={data.place.name}
                            required />
                        </div>
                    </div>
                    <div className ="form-group col-sm-6">
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
                    <div>
                        <input type="submit" value="Add Place" />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
