import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
 
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate travel plans for the location Las Vegas for 3 days for couple with a cheap budget. Give me a hotel options list with the hotel's name, address, price, image URL, geo coordinates, rating, descriptions, and suggested itinerary with placeName, placeDetails, place image URL, geo coordinates, ticket pricing, rating. Time travel each of the location for 3 days with each day plan and best time to visit in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100 per night\",\n      \"imageUrl\": \"https://www.thedlev.com/images/slider/featured-slider/banner-2.jpg\",\n      \"geoCoordinates\": \"36.1677° N, 115.1389° W\",\n      \"rating\": 4.0,\n      \"description\": \"A downtown hotel with a retro vibe, offering affordable rooms, a casino, and a variety of dining options.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$70-$150 per night\",\n      \"imageUrl\": \"https://www.goldennugget.com/las-vegas/images/hotel/goldennugget_hotel.jpg\",\n      \"geoCoordinates\": \"36.1687° N, 115.1402° W\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel located on Fremont Street, known for its lavish pool, casino, and dining experiences.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80 per night\",\n      \"imageUrl\": \"https://www.circuscircus.com/images/default-source/hotel-photos/circus-circus-hotel-las-vegas-exterior.jpg?sfvrsn=9c8e25c7_0\",\n      \"geoCoordinates\": \"36.1013° N, 115.1734° W\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a carnival theme, offering affordable rooms, a circus, and numerous dining options.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"time\": \"Morning\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a canopy of lights and live entertainment. Experience the vibrant atmosphere and enjoy free shows.\",\n          \"placeImageUrl\": \"https://www.fremontstreetexperience.com/images/photos/carousel/photo-3.jpg\",\n          \"geoCoordinates\": \"36.1672° N, 115.1404° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5\n        }\n      ],\n      \"bestTime\": \"Any time of day, but especially lively at night.\"\n    },\n    \"day2\": {\n      \"time\": \"Morning\",\n      \"plan\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"A magnificent engineering marvel and a popular tourist destination. Take a tour to learn about its history and construction.\",\n          \"placeImageUrl\": \"https://www.nps.gov/hdam/planyourvisit/images/hoover-dam-from-the-top.jpg\",\n          \"geoCoordinates\": \"36.0043° N, 114.9979° W\",\n          \"ticketPricing\": \"$30 per person\",\n          \"rating\": 4.5\n        }\n      ],\n      \"bestTime\": \"Morning or late afternoon to avoid the midday heat.\"\n    },\n    \"day3\": {\n      \"time\": \"Morning\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A beautiful and free attraction showcasing stunning floral displays. Explore the different themed gardens and take in the vibrant colors.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory-botanical-garden/conservatory-botanical-garden-2022-fall-02.jpg\",\n          \"geoCoordinates\": \"36.1167° N, 115.1721° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5\n        }\n      ],\n      \"bestTime\": \"Anytime, but the garden is most impressive during the day.\"\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This itinerary focuses on free or low-cost attractions.\n* Hotel prices are approximate and may vary depending on the time of year and availability.\n* It's always a good idea to book accommodations and tours in advance, especially during peak season.\n* This is just a suggested itinerary; feel free to customize it based on your interests and preferences.\n\n**Additional tips for a cheap Vegas trip:**\n\n* Drink water instead of buying expensive drinks at casinos.\n* Pack your own snacks and drinks to avoid overspending at the resort.\n* Take advantage of free shows and attractions.\n* Look for discounted coupons and deals online.\n* Consider visiting during the off-season to save money on flights and accommodations.\n* Utilize the free transportation options available, such as the monorail and the Deuce bus. \n"},
          ],
        },
      ],
    });
  