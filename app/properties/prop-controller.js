function PropertyController () {

    var propService = new PropertyService();

    this.drawPropForm = function drawPropForm() {
        var formElem = document.getElementById('forms').innerHTML= `
        <form onsubmit="app.controllers.propsCtrl.addProp(event)" id="prop-form">
            <input type="number" name='bedrooms' placeholder='Bedrooms'>
            <input type="number" name='bathrooms' placeholder='Bathrooms'>
            <input type="number" name='sqrFt' placeholder='Square Feet'>
            <input type="number" name='price' placeholder='Price'>
            <input type="url" name='img' placeholder='image link'>
            <div class="form-group">
                <label for="options">Buy/Rent</label>
                <select class="form-control" id="options">
                    <option value="0">Buy</option>
                    <option value="1">Rent</option>
                </select>
                <label for="garage">Garage</label>
                <select class="form-control" id="garage">
                    <option value="0">Yes</option>
                    <option value="1">No</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
        `
        draw();
    }


    function draw() {
        var propArr = propService.getProps();
        var template = '';
        for (let i = 0; i < propArr.length; i++){
            const property = propArr[i];
            template += `
            <div class="col-sm-3">
                <img src="${property.img}" alt="car">
                <p>Price: $${property.price}</p>
                <p>Bedrooms: ${property.bedrooms}</p>
                <p>Bathrooms: ${property.bathrooms}</p>
                <p>Square Feet: ${property.sqrFt} </p>
            </div>            
            `
        }
        document.getElementById('board').innerHTML = template;
    }

    this.addProp = function addProp (event) {
        var form = event.target;
        event.preventDefault();
        var propObj = {
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            sqrtFt: form.sqrFt.value,
            price: form.price.value,
            img: form.img.value,
            option: form.options.value,
            garage: form.garage.value
        }
        propService.addProp(propObj);
        document.getElementById("prop-form").reset();
        draw();
    }
}