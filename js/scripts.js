var customers = []
var currentAccount;
$(function(){
  $('#create-button').click(function(event){
    event.preventDefault();
    var userFirstName = $('#first-name-input').val();
    var userLastName = $('#last-name-input').val();
    var userInitialDeposit = parseFloat($('#initial-input').val());
    var streetAddress = $('#street-address-input').val();
    var apartmentNumber = $('#apartment-number-input').val();
    var city = $('#city-input').val();
    var state = $('#state-input').val();
    var zipCode = $('#zip-code-input').val();
    var phoneNumber = $('#phone-number-input').val();

    var newCustomer = new Customer(userFirstName, userLastName, userInitialDeposit, streetAddress, apartmentNumber, city, state, zipCode, phoneNumber)
    customers.push(newCustomer)
    newCustomer.displayInfo()


  });
    $('#deposit-button').click(function(event){
    var userMoney = parseFloat($('#money-input').val())
    currentAccount.balance += userMoney
    $('#balance').html('$' + currentAccount.balance);
    event.preventDefault();
  });
  $('#withdraw-button').click(function(event){
    var userMoney = parseFloat($('#money-input').val())
    currentAccount.balance -= userMoney;
    $('#balance').html('$' + currentAccount.balance);
    event.preventDefault();
  });
});

function Customer(firstName, lastName, initialDeposit, street, apartmentNumber, city, state, zipCode, phoneNumber) {
  this.name = {
    'first': firstName,
    'last': lastName
  }
  this.address = {
    'street': street,
    'apartmentNumber': apartmentNumber,
    'city': city,
    'state': state,
    'zipCode': zipCode,
    'phoneNumber': phoneNumber
  }
  this.balance = initialDeposit;
  this.displayInfo = function() {
    currentAccount = this
    $('#transfer-card').removeClass('hidden');
    $('#info-card').removeClass('hidden');

    $('#customer-info-header').html(`<h3 style="float:left">` + this.name.first + " " + this.name.last + `</h3><h4><div class="alert alert-success" id="balance" style="font-weight:bold;float:right"></div></h4>`);
    $('#balance').html('$'+this.balance)
    var addressRow = `<div class="row"><div class="col-6"><strong>Address</strong></div><div id="full-address" class="col-6"></div></div>`;
    var street = `<span id="address-row" class="float-right"></span><br />`
    var cityState = `<span id="city-state-row" class="float-right"></span><br />`;
    var phoneNumber = `<span id="phone-number-row" class="float-right"></span>`;
    $('#customer-info-display').append(addressRow)

    $('#full-address').append(street)
    $('#full-address').append(cityState)
    $('#full-address').append(phoneNumber)

    $('#address-row').html(this.address.street + " " + this.address.apartmentNumber + "<br />");
    $('#city-state-row').html(this.address.city + ", " + this.address.state + " " + this.address.zipCode + "<br />");
    $('#phone-number-row').html(this.address.phoneNumber);
  }
  console.log(this);
}
