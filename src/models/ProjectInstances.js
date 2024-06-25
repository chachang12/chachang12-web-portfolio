import Project from "./Project";
import pagingsim from '../assets/paging-sim.png'; // Import the image directly

const ProjectInstances = [
    new Project('Memory Virtualization Paging Simulator',
    'This web app is designed to help operating system students understand the concept of paging within virtual memory systems. It calculates virtual address and physical address lengths, page table size, and offset. The app aims to make understanding virtualization problems easier while including a visual representation of the relationship between the virtual address space, physical address space, and the page table.',
    pagingsim,
    'https://soontobeonghpages.com',
    ['React', 'JavaScript', 'CSS', 'HTML'])
];

export default ProjectInstances;