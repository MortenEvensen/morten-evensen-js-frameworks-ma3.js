import React from "react"
import Heading from "./Heading"
import HomeContent from "./HomeContent"

function Home() {
	return (
		<div>
			<Heading title="I am the Headline. This text is generated in the Home component, but the H1 tag is in the Heading component"/>
			<HomeContent>
				Lorem Ipsum Ipsumus Loremsus
			</HomeContent>
		</div>	
		
	)
}

export default Home;