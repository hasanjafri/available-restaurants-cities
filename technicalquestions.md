## How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent about 2.5 hours on this coding challenge. In order to make this better, I would add the ability to query multiple pages from the results returned by the OpenTable API, currently I just limited the results to page 1 (25 max) but each page can probably contain a maximum of 25 results and the bottom buttons for "Next Page" and "Previous Page" can actually query the results from the next page from the OpenTable API. I would improve overall layout as well as it is really simple at the moment.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

With React 16.8, React Hooks are available in a stable release accessible by anyone using React. Hooks make it possible to organize logic in components, making them tiny and reusable without writing a class. Unlike patterns like render props or higher-order components, Hooks don't introduce unnecessary nesting into your component tree. They also don't suffer from the drawbacks of mixins. 

Personally I have not used React-Hooks yet, but I have read a lot about them and this is one example I can think of using Hooks:

    import { useState } from 'react';
        
    function SampleComponent() {

        const [input, setValue] = useState("");
        const [name, setName] = useState('Hasan Jafri);

        handleInput = (event) => {
            setValue(event.target.value);
        }
        
        updateName = (event) => {
            event.preventDefault();
            setName(input);
            setValue("");
        }
        
        return
            <div>
                <p>Howdy, {name}</p>
                <div>
                    <input type="text" value={input} onChange={handleInput} />
                    <button onClick={updateName}>Save</button>
                </div>
            </div>
    }

## How would you track down a performance issue in production? Have you ever had to do this?

Personally I have not yet had to deal with performance issues myself in production **professionally**. However, from hackathon and academic experience I know one way to quantify the performance of components is to use the supported performance tools which are available in certain browsers. Using Google Chrome, one can use the Chrome DevTools Performance Tab and press Record after disabling conflicting Chrome extensions as well as running the app in development mode. One can then profile the actions that must be tested for optimization and then stop recording, react events will then be available grouped under the user timing label.

## How would you improve the API that you just used?

I think by design the API is pretty good, accepts certain query parameters as well where necessary. If anything I would add more information that is being returned per restaurant so that the API meets a variety of use cases and ultimately gets utilized more. I would also add the ability to change how many results are returned per page as different companies have different requirements.

## Please describe yourself using JSON.

    {
        "name": "Hasan Jafri",
        "age": 23,
        "nationality": "Canadian",
        "university": {
            "name": "University of Toronto",
            "degree": "Bachelors",
            "majors": "Computer Science & Mathematics",
            "expected_graduation": "December 2019 (Part Time)"
        },
        "passions": [
            "Programming",
            "Mathematics",
            "Psychology",
            "Basketball",
            "Gaming",
            "Music"
        ],
        "goals": [
            "Develop/design something that makes the lives of others easier or more convenient",
            "Dunk a basketball before I die",
            "Release a fun and popular mobile game",
            "Produce an instrumental track that gets featured on YouTube or used in montages/compilations",
            "Get one of the most powerful PCs & Laptops that money can buy"
        ],
        "beliefs": [
            "Never judge a book by it's cover",
            "I can always make tomorrow better"
        ],
        "interests": [
            "Artificial Intelligence",
            "Internet of Things"
        ],
    }