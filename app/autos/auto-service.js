function AutoService() {
    // this is where cars array will go
    var url = 'https://inspire-server.herokuapp.com/api/engstrom-cars/';
    var localCars = [];

    function Car(formData) {
        this.year = formData.year.value,
        this.make = formData.make.value,
        this.model = formData.model.value,
        this.price = formData.price.value,
        this.miles = formData.miles.value,
        this.img = formData.img.value
    }
    
    this.getCars = function getCars(cb) {
        $.get(url)
            .then(function (cars){
                localCars = cars;
                cb(localCars);
        })
    }

    this.makeCar = function makeCar(formData, cb) {
        var car = new Car(formData);
        $.post(url, car)
            .then(res => {
                localCars.unshift(res);
                this.getCars(cb);
        })
    }

    this.removeCar = function removeCar(id, cb){
        $.ajax({
            url: url + id,
            method: 'DELETE'
        })
            .then(res => {
                this.getCars(cb);
            })
    }

    // SAMPLE DATA
    // cars.push(new Car('Chevy', 1998, 'Blazer', 7800, 'https://media.ed.edmunds-media.com/chevrolet/blazer/1998/oem/1998_chevrolet_blazer_4dr-suv_lt_fq_oem_1_500.jpg', 56000))
    // cars.push(new Car('Pontiac', 2001, 'Firebird', 7200, "http://images.gtcarlot.com/pictures/50004306.jpg", 900000))
    // cars.push(new Car('Ford', 1990, 'Probe', 200, "https://farm8.static.flickr.com/7555/15730606300_3bf485543c_b.jpg", 75000))
    // cars.push(new Car('Toyota', 1992, 'MR2', 18000, "https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png", 45000))


}