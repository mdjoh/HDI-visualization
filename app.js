
let viz;

//Add Share Link to Tableau Public in here
const url = "https://public.tableau.com/views/HDIViz_17131632280670/HDIDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1500,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

//create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);
