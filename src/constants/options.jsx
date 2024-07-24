export const selectTravellerList= [
    {
        id: 1,
        title: 'Just Me',
        desc: 'Perfect for solo adventurers looking for a personalized getaway.',
        icon: '🧳',
        people: '1'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Ideal for romantic escapes and special moments together.',
        icon: '👩🏻‍❤️‍👨🏻',
        people: '2 people'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'Tailored for family fun, with activities for all ages.',
        icon: '👨‍👩‍👧‍👦',
        people: '3-5 people'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'Great for group adventures and making unforgettable memories with friends.',
        icon: '🧿',
        people: '5-10 people'
    },
]

export const selectBudgetList = [
    {
        id: 1,
        title: 'Affordable',
        desc: 'Enjoy an amazing trip without breaking the bank.',
        icon: '💰'
    },
    {
        id: 2,
        title: 'Mid-range',
        desc: 'Balance comfort and cost for a well-rounded experience.',
        icon: '💵'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Indulge in premium experiences and top-notch amenities.',
        icon: '💸'
    },
]

// export const AI_PROMPT = "Generate travel plans for the location {location} for {numDays} days for {numTravellers} with a {budget} budget. Give me a hotel options list with the hotel's name, address, price, image URL, geo coordinates, rating, descriptions, and suggested itinerary with placeName, placeDetails, place image URL, geo coordinates, ticket pricing, rating. Time travel each of the location for {numsDays} days with each day plan and best time to visit in JSON format"
export const AI_PROMPT = "Generate travel plans for the location {location} for {numDays} days for {numTravellers} with a {budget} budget. Give me a hotel options list with the hotel's name, address, price, image URL, geo coordinates, rating, descriptions, and suggested itinerary with placeName, placeDetails, place image URL, geo coordinates, ticket pricing, rating. Time travel each of the location for {numsDays} days with plans for each day and best time to visit in JSON format. Make sure the itinerary can be iterated through and the itinerary includes the variable day and the array plans \n"