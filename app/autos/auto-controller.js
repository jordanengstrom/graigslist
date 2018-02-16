function AutoController() {

    var autoService = new AutoService();
    var resultsElem = document.getElementById('board');

    // DRAWS FORM AND RESULTS 
    this.drawAutoForm = function drawAutoForm() {
        var formElem = document.getElementById('forms').innerHTML = `
             <form onsubmit="app.controllers.autosCtrl.makeCar(event)" id="car-form">
                 <input type="number" name='year' placeholder='Year'>
                 <input type="text" name='make' placeholder='Make'>
                 <input type="text" name='model' placeholder='Model'>
                 <input type="number" name='price' placeholder='Price'>
                 <input type="number" name='miles' placeholder='Miles'>
                 <input type="url" name='img' placeholder='image link'>
                 <button type="submit">Submit</button>
             </form>`
        draw();
    }

    function draw(cars) {
        var template = '';
        if (cars.length < 1) {
            resultsElem.innerHTML = '<h4>Sorry, there are no listings at this time. Please try again later.</h4>';
            return;
        }
        cars.forEach(car => {
            template += `
            <div class="col-sm-3">
            <img src="${car.img}" alt="car">
            <p>Make: ${car.make}</p>
            <p>Model: ${car.model}</p>
            <p>Price: $${car.price}</p>
            <p>Miles: ${car.miles}</p>
            <i class="far fa-trash-alt"></i>
            </div>`
        })
        resultsElem.innerHTML = template;
    }

    function getCars() {
        autoService.getCars(draw);
    }

    this.makeCar = function makeCar(event) {
        event.preventDefault();
        var form = event.target;
        autoService.makeCar(form,draw);
        form.reset();
    }

    this.removeCar = function removeCar(id) {
        autoService.removeCar(id, draw);
    }

    getCars();

}