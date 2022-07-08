import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  const props = {
    apartments: [
      {
        street: "243 Drury Lane",
        city: "San Diego",
        state: "CA",
        manager: "Muffy Men",
        email: "muffy.apartment@.com",
        price: "10,00",
        bedrooms: 3,
        bathrooms: 3,
        pets: "yes",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60"
      }
    ]
  }
  let apartmentIndexRender
  beforeEach(() => {
    apartmentIndexRender = shallow(<ApartmentIndex {...props} />)
  })
  it("displays a heading", () => {

    const apartmentIndexHeading = apartmentIndexRender.find("h3")
    expect(apartmentIndexHeading.text()).toEqual("Apartment Index")
  })
  it("displays a card from ReactStrap per apartment ", () => {
    const apartmentIndexCard = apartmentIndexRender.find("Card")
    expect(apartmentIndexCard.length).toEqual(1)
  })
})
