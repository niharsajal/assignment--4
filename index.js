const totalCountId = document.getElementById('total-count');
const interviewCountId = document.getElementById('interview-count');
const rejectedCountId = document.getElementById('rejected-count');

const jobsCountId = document.getElementById('jobs-count');
const cardListItems = document.getElementById('card-list');

let jobData = [
{
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "not_applied"
},
{  
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients.",
    status: "not_applied",
},
{
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex datainto compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "not_applied"
},
{
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "not_applied"
},
{
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "not_applied"
},
{
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "not_applied"
},
{
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included."
},
{
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
},
];


// render cards
function renderJobs(jobs){

    cardListItems.innerHTML = "";

    
for(const job of jobs){
    const realIndex = jobData.indexOf(job);

        const div = document.createElement("div");

        div.className = "flex flex-col gap-4 p-5 bg-white shadow-sm rounded-lg";

        div.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-xl text-[#002C5C] font-semibold">${job.company}</h2>
                    <p>${job.position}</p>
                </div>
                <button onclick="deleteJob(${realIndex})">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>

            <ul class="flex gap-6 text-[#64748B]">
                <li class="list-none">${job.location}</li>
                <li>${job.type}</li>
                <li>${job.salary}</li>
            </ul>

            <p class="text-sm font-semibold ${
                job.status === "interview"
                ? "text-green-600"
                : job.status === "rejected"
                ? "text-red-600"
                : "text-gray-500"
            }">
                ${
                    job.status === "interview"
                    ? "Interview"
                    : job.status === "rejected"
                    ? "Rejected"
                    : "Not Applied"
                }
            </p>

            <p class="text-gray-600">${job.description}</p>

            <div class="flex gap-3">
                <button onclick="markInterview(${realIndex})"
                    class="px-5 py-2 border border-[#10B981] text-[#10B981] font-semibold rounded-md">
                    Interview
                </button>

                <button onclick="markRejected(${realIndex})"
                    class="px-5 py-2 border border-[#EF4444] text-[#EF4444] font-semibold rounded-md">
                    Rejected
                </button>
            </div>
        `;

        cardListItems.appendChild(div);
}
    updateCounts();
}


// update counts
function updateCounts(){

    const total = jobData.length;

    const interview = jobData.filter(job=>job.status==="interview").length;

    const rejected = jobData.filter(job=>job.status==="rejected").length;

    totalCountId.nextElementSibling.innerText = total;
    interviewCountId.nextElementSibling.innerText = interview;
    rejectedCountId.nextElementSibling.innerText = rejected;

    jobsCountId.innerText = total;
}


// mark interview
function markInterview(index){
    jobData[index].status = "interview";
    renderJobs(jobData);
}


// mark rejected
function markRejected(index){
    jobData[index].status = "rejected";
    renderJobs(jobData);
}


// delete job
function deleteJob(index){
    jobData.splice(index,1);
    renderJobs(jobData);
}


// initial render
renderJobs(jobData);

const allBtn = document.getElementById("all");
const interviewBtn = document.getElementById("interview");
const rejectedBtn = document.getElementById("rejected");


// filter functions
allBtn.addEventListener("click", () => {
    setActiveButton("all");
    renderJobs(jobData);
});

interviewBtn.addEventListener("click", () => {

    setActiveButton("interview");

    const filtered = jobData.filter(job => job.status === "interview");

    renderJobs(filtered);
});

rejectedBtn.addEventListener("click", () => {

    setActiveButton("rejected");

    const filtered = jobData.filter(job => job.status === "rejected");

    renderJobs(filtered);
});

// const allBtn = document.getElementById("all");
// const interviewBtn = document.getElementById("interview");
// const rejectedBtn = document.getElementById("rejected");


// filter functions
allBtn.addEventListener("click", () => {
    setActiveButton("all");
    renderJobs(jobData);
});

interviewBtn.addEventListener("click", () => {

    setActiveButton("interview");

    const filtered = jobData.filter(job => job.status === "interview");

    renderJobs(filtered);
});

rejectedBtn.addEventListener("click", () => {

    setActiveButton("rejected");

    const filtered = jobData.filter(job => job.status === "rejected");

    renderJobs(filtered);
});
