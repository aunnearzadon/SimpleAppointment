document.getElementById("next").addEventListener('click', function(){
  next()
})

document.getElementById("queue-customer").addEventListener('click', function(){
  queueCustomer()
})

document.getElementById("reset").addEventListener('click', function(){
  reset()
})

document.getElementById('number-limit').addEventListener('change', function(){
  disableButton()
})

let customers = []
const customerCount = 0


const next = () => {
  const customer = customers[0]
  document.getElementById("customer").innerHTML = customer
  customers.shift()
  document.getElementById('next-in-line').value = customers[0] ? customers[0] : ''
  calloutCustomer(customer)
  disableButton()
}

const queueCustomer = () => {
  customers.push(document.getElementById('last-issued').value)
  document.getElementById('next-in-line').value = customers[0]
  document.getElementById('last-issued').value = ''
  console.log(customers)
  disableButton()
}

const reset = () => {
  document.getElementById("customer").innerHTML = ''
  document.getElementById('next-in-line').value = ''
  document.getElementById('last-issued').value = ''
  document.getElementById('number-limit').value = 0
  customers = []
  disableButton()
}

const calloutCustomer = (customer) => {
  const text = `calling customer ${customer}`
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech)
}

const disableButton = () => {
  const limit = parseInt(document.getElementById('number-limit').value)
  if(customers.length <= 0) {
    document.getElementById("next").disabled = true
  } else {
    document.getElementById("next").disabled = false
  }

  if(customers.length >= 0 && customers.length >= limit) {
    document.getElementById("queue-customer").disabled = true
  } else {
    document.getElementById("queue-customer").disabled = false 
  }
}