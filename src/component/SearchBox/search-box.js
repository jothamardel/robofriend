

export const SearchBox = ({ onSearchInput, resetRobotsData }) => (
    <div className="center mt2 mb2">
        <input 
            type="text" 
            placeholder="Search" 
            className="pa3 bg-lightest-navy shadow-4"
            onChange={ onSearchInput }
        />
        <span 
            className="pa2 f3 pointer ba bg-light-red white shadow-4"
            onClick={ resetRobotsData }
        >x</span>
    </div>
);