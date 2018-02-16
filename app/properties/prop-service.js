function PropertyService() {

    var properties = [];
    var options = ['buy', 'rent'];
    var garage = ['yes', 'no'];


    function Property(bedrooms, bathrooms, sqrFt, price, img, option, garage) {
        this.bedrooms = bedrooms,
            this.bathrooms = bathrooms,
            this.sqrFt = sqrFt,
            this.price = price,
            this.img = img,
            this.option = options[option];
        this.garage = true;
    }

    this.getProps = function getProps() {
        return JSON.parse(JSON.stringify(properties));
    }

    this.addProp = function addProp(propObj) {
        var newProp = new Property(propObj.bedrooms, propObj.bathrooms, propObj.sqrtFt, propObj.price, propObj.img, propObj.option, propObj.garage);
        properties.push(newProp);
    }

    properties.push(new Property(3, 2, 2800, 1800, 'https://s-ec.bstatic.com/images/hotel/max1024x768/360/36022959.jpg', 'rent', true))
    properties.push(new Property(1, 1, 800, 700, 'https://07f138315bb5e97f9e43-31068357019044cca7c8e84d92de0d99.ssl.cf3.rackcdn.com/1024x768/56587_11491_001.jpg', 'rent', false))
    properties.push(new Property(2, 1, 1000, 850, 'http://www.idesignarch.com/wp-content/uploads/Apartment-Green-Walls_1.jpg', 'rent', true));
    properties.push(new Property(3, 2, 3000, 275000, 'https://cdn.decoist.com/wp-content/uploads/2016/10/Modern-private-apartment-in-Milan-deisgned-by-Cristiana-Vannini.jpg','buy',true))

}