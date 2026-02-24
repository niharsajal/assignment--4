
document.getElementById("")
// 
const totalCountId = document.getElementById('total-count');
const interviewCountId = document.getElementById('interview-count');
const rejectedCountId = document.getElementById('rejected-count');

// 
const allId = document.getElementById('all');
const interviewId = document.getElementById('Interview');
const rejectedId = document.getElementById('rejected');
const jobsCountId = document.getElementById('jobs-count');
// 
const cardListItemts = document.getElementById('card-list');

// 
const jobData = [{
    
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",

},
{  
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Remote",
    type: "Los Angeles, CA",
    salary: "$130,000 - $175,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."

}
]

for(const job of jobData){
  const card = document.createElement(` <div class="flex flex-col gap-4 p-5 bg-white shadow-sm ">
                <div class="flex justify-between items-center">
                    <div>
                    <h2 class="text-2xl text-[#002C5C] font-semibold">Mobile First Corp</h2>
                     <p>React Native Developer</p>
                    </div>
                    <button>
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                <ul class="list-disc flex gap-10 text-[#64748B]">
                    <li class="list-none">Remote</li>
                    <li>Full-time</li>
                    <li>$130,000 - $175,000</li>
                </ul>
                <p>Not Applied</p>
                <p>Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                <div class="flex gap-3">
                    <button class="px-5 py-2 border border-[#10B981] text-[#10B981] font-semibold rounded-md">interview</button>
                    <button class="px-5 py-2 border border-[#EF4444] text-[#EF4444] font-semibold rounded-md">Rejected</button>
                </div>
            </div>`)
            cardListItemts.append(card)
}
