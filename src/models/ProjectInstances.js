import Project from "./Project";
import pagingsim from '../assets/paging-sim.png'; // Import the image directly
import { ppdemotransparent } from "../assets";


const ProjectInstances = [

    new Project('Power Pickle', 'Power Pickle is a web app that tracks users pickleball ratings based on their match history. Play matches and compete with your friends through a social media-like experience where each game tracks and modifies user ratings based on an intuitive matchmaking rating algorithm. Keep track of your recent wins and losses and find new challengers to increase your rating.', ppdemotransparent, '/powerpickle', ['React', 'JavaScript', 'CSS', 'HTML', 'Firebase']), 

    new Project('Memory Virtualization Paging Simulator',
    'This web app is designed to help operating system students understand the concept of paging within virtual memory systems. It calculates virtual address and physical address lengths, page table size, and offset. The app aims to make understanding virtualization problems easier while including a visual representation of the relationship between the virtual address space, physical address space, and the page table.',
    pagingsim,
    'https://github.com/chachang12/PagingSim',
    ['React', 'JavaScript', 'CSS', 'HTML']),
];

export default ProjectInstances;