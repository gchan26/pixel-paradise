import Block from "../assets/Block.gif"

const NoResults = () => (
    <>
        <div className="text-center text-white mt-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center font-retro">No Results Found</h2>
            <img src={Block} className="w-52"/>
            <p className="mt-4 text-center">Try adjusting your search criteria or filters.</p>
        </div>
    </>
  );
  
  export default NoResults;