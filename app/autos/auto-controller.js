function AutoController() {

    var autoService = new AutoService();

    this.drawAutoForm = function drawAutoForm() {
        var formElem = document.getElementById('forms').innerHTML= `
        <form onsubmit="app.controllers.autosCtrl.addCar(event)" id="car-form">
            <input type="text" name='make' placeholder='Make'>
            <input type="text" name='model' placeholder='Model'>
            <input type="number" name='year' placeholder='Year'>
            <input type="number" name='price' placeholder='Price'>
            <input type="url" name='img' placeholder='image link'>
            <div class="form-group">
                <label for="condition">Condition</label>
                <select class="form-control" id="condition">
                    <option value="0">New</option>
                    <option value="1">Like New</option>
                    <option value="2">Fair</option>
                    <option value="3">Rust Bucket</option>
                    <option value="4">You got a tow truck?</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>`
        draw();
    }

        function draw() {
        var carArr = autoService.getCars();
        var template = '';
        for (let i = 0; i < carArr.length; i++) {
            const car = carArr[i];
            template += `
            <div class="col-sm-3">
                <img src="${car.img}" alt="car">
                <p>Make: ${car.make}</p>
                <p>Model: ${car.model}</p>
                <p>Price: $${car.price}</p>
            </div>`
        }
        document.getElementById('board').innerHTML = template;
    }

    
    this.addCar = function addCar(event) {
        event.preventDefault();
        var form = event.target;
        var carObj = {
            make: form.make.value,
            year: form.year.value,
            model: form.model.value,
            price: form.price.value,
            condition: form.condition.value,
            img: form.img.value
        }
        autoService.addCar(carObj);
        document.getElementById('car-form').reset();
        draw();
    }


}