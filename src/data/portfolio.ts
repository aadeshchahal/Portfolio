export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    link?: string;
    github?: string;
    embedUrl?: string;
    // New fields for deep dive
    detailedDescription?: string;
    challenges?: string[];
    results?: string[];
    gallery?: { url: string; caption: string; type: 'image' | 'video' }[]; // Array of media items
    pdfUrl?: string; // URL to a PDF file (e.g., "/pdfs/project-slides.pdf")
    documents?: { title: string; url: string }[]; // Array of downloadable documents
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    summary: string; // Short one-liner for the home page
    intro?: string; // Brief intro paragraph for the dedicated page
    description: string[]; // Detailed bullet points for the dedicated page
    images?: string[]; // Array of paths to images in public/experience folder
    relatedProject?: {
        id: string;
        name: string;
    };
}

export interface SocialLink {
    platform: string;
    url: string;
    icon?: string;
}

export interface PortfolioData {
    profile: {
        name: string;
        role: string;
        bio: string;
        about: string; // Longer introduction
        photoUrl?: string; // Profile picture
        coursework: string[];
        technicalInterests: string[];
        personalInterests: string[]; // Separated for better display
        social: SocialLink[];
        email?: string;
        phone?: string;
    };
    projects: Project[];
    experience: Experience[];
}

export const portfolioData: PortfolioData = {
    profile: {
        name: "Aadesh Chahal",
        role: "UBC Materials Engineering Student",
        bio: "Materials Engineering student with a passion for coding, physical prototyping, and industrial asset optimization.",
        about: "I'm a Materials Engineering Co-op student at the University of British Columbia with a keen interest in solving real-world problems through engineering and technology.\n\nThrough my previous internship at Suncor Energy paired with my academic coursework, I have gained valuable hands-on experience in the Oil & Gas sector, specifically in industrial asset optimization and failure analysis, leading projects on corrosion control and equipment reliability. \n \nMoving forward, I am eager to apply my skills and knowledge from recent coursework and previous experience to challenging environments within the finance, mining, energy, or semiconductor sectors.",
        photoUrl: "/profile.jpg", // Expecting file in public folder
        coursework: [
            "MTRL 363 & 478: Semiconductor Processing and Materials",
            "MTRL  361: Modelling of Materials Processes",
            "MTRL 486: Nondestructive Evaluation",
            "MTRL 358/9: Hydrometallurgy/Lab",
            "MANU 465: AI and Machine Learning Application in Manufacturing",
        ],
        technicalInterests: ["Energy", "Mining", "NDE / Asset Integrity", "Semiconductor Materials and Processes", "Finance"],
        personalInterests: ["Weightlifting", "Ice Hockey", "Golf",],
        social: [
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/aadeshchahal/" },
            { platform: "GitHub", url: "https://github.com/aadeshchahal" },
        ],
        email: "aadeshchahal1@gmail.com",
        phone: "+1 (587) 712-2539",
    },
    experience: [
        {
            id: "1",
            role: "Materials Engineering Intern",
            company: "Suncor Energy",
            period: "May 2024 - Dec 2024",
            summary: "Executed materials engineering projects across all areas of Fort Hills Mine, including mobile mine equipment, fixed plant operations, and tailings management.",
            intro: "During my 8-month internship at Suncor Energy's Fort Hills Mine, I was able to gain extensive knowledge in the energy and mining sector. \n\n I worked within the Asset Integrity and Reliability team. I was apart of project across the site, from mobile mine equipment to tailings management. This role required a deep understanding of corrosion mechanisms, wear patterns, and NDE techniques to optimize asset performance and reliability.",
            description: [
                "Administered a $200K budget to apply a HVOF thermal spray coating to Komatsu 980E haul truck bolsters to decrease exhaust heat corrosion and maintenance time.",
                "Increased lifespan of slurry piping assets using GE APM to calculate erosion rates from NDE readings and thickness monitoring.",
                "Created rebuild scopes of work for CAT D8 bulldozers, decreasing frequency of third party work by 50%.",
                "Reduced biological corrosion by 10% in recycled water pipes by developing a filter system.",
            ],
            images: [
                "/experience/suncor/1732301969912.jpg",
                "/experience/suncor/1757036527223.jpg",
            ],
            relatedProject: {
                id: "p1",
                name: "Komatsu 980E Bolster Project"
            }
        },
        {
            id: "2",
            role: "Lot Attendant",
            company: "Southgate Volkswagen",
            period: "May 2021 - Aug 2023",
            summary: "Managed vehicle logistics, inventory organization, and efficient delivery operations while maintaining a 100% safety rating.",
            intro: "This was a role I held part time through high school and full time during the summers.\n\nAs a Lot Attendant at Southgate Volkswagen, I played an important role in the daily operations of the dealership. \n\n Here I was able to begin developing skills in priority management, working with cross functional teams, while in a fast-paced environment.",
            description: [
                "Developed safe driving skills while delivering and collecting vehicles around Alberta to and from customers and shops, while maintaining a 100% safety rating.",
                "Managed digital scheduling tools for coordinating vehicle movements between the lot, service area, shops, and customers, up to 20 times a day, optimizing workflow efficiency.",
                "Monitored and organized vehicle inventory, ensuring efficient use of lot space and easy accessibility for customers and staff.",
            ],
            images: [
                "/experience/volkswagen/IMG_6903.jpeg",
                "/experience/volkswagen/IMG_6904.jpeg",
                "/experience/volkswagen/IMG_6905.jpeg",
                "/experience/volkswagen/IMG_6906.jpeg",
            ]
        },
    ],
    projects: [
        {
            id: "p1",
            title: "Komatsu 980E Bolster HVOF Coating Initiative",
            description: "Administered a $200K budget to implement High Velocity Oxygen Fuel (HVOF) thermal spray coatings on Komatsu 980E haul truck bolsters.",
            detailedDescription: "The Komatsu 980E haul trucks operate in extreme conditions, where exhaust heat causes severe corrosion on the bolsters. After investigating the extent of the damage using Non-Destructive Evaluation (NDE) techniques, I led the initiative to apply High Velocity Oxygen Fuel (HVOF) thermal spray coatings as a solution. \n\nThis process involves propelling molten powder at high speeds to create a dense, extremely hard, and corrosion-resistant coating.",
            challenges: [
                "Managing a strict $200K budget for a high-cost application.",
                "Coordinating with maintenance teams to minimize truck downtime during application.",
                "Working with cross functional teams and vendors to ensure successful implementation.",
            ],
            results: [
                "Received $200k in funding to run project trial",
                "Extended component lifecycle, projected to save thousands in maintenance costs.",
                "Established a new standard maintenance procedure for the fleet.",
            ],
            tags: ["Materials Engineering", "Project Management", "Corrosion Control", "Mining"],
            imageUrl: "/projects/komatsu-980e.jpg",
            pdfUrl: "/pdfs/Haul Truck Bolster Corrosion .pdf"
        },
        {
            id: "p4",
            title: "Airless RC Car Tires",
            description: "Designed, manufactured, and tested 3D-printed airless tires, reducing costs by 85% while maintaining performance.",
            detailedDescription: "Led the design, manufacturing, and testing of 3D-printed airless tires to replace expensive rubber alternatives. The project involved rigorous material selection, comparing TPU, PLA, PETG, and ABS, ultimately identifying TPU 95A for its superior impact resistance (88.5 J/m² Z-toughness). \n\nWe executed a comprehensive Engineering Validation Test (EVT) plan, including high-speed acceleration, rolling resistance, and a 1km durability circuit to ensure the tires met recreational performance standards.",
            challenges: [
                "Optimizing print settings for TPU 95A to ensure layer adhesion and Z-toughness.",
                "Designing a lattice structure that replicates the compliance and grip of pneumatic tires.",
                "Validating durability under high-impact and high-speed conditions."
            ],
            results: [
                "Reduced manufacturing costs by 85% ($3/set vs. $20/set).",
                "Successfully passed 1km circuit durability and high-speed grip testing.",
                "Identified TPU 95A as the sole viable polymer for high-impact applications."
            ],
            tags: ["Project Management", "Product Design", "FDM 3D Printing", "Material Validation", "Cost Analysis", "SolidWorks"],
            imageUrl: "/projects/airless-tires/cover-render.png",
            documents: [
                { title: "Final Project Report", url: "/pdfs/Airless RC Car Tires/Final Report MTRL 320.pdf" }
            ],
            gallery: [
                { url: "/projects/airless-tires/video_2025-11-05_22-08-52.mp4", caption: "Printing Timelapse", type: "video" },
                { url: "/projects/airless-tires/Mugen Seiki MTX-3 RC Car Used for Testing.png", caption: "Mugen Seiki MTX-3 RC Car Used for Testing", type: "image" },
                { url: "/projects/airless-tires/TPU Tire Wear.png", caption: "TPU Tire Wear Analysis", type: "image" }
            ]
        },
        {
            id: "p5",
            title: "Options Analytics Engine",
            description: "Engineered a quantitative dashboard for real-time BSM pricing and Greek sensitivity analysis using Python & Streamlit.",
            detailedDescription: "Developed a comprehensive Options Analytics Platform to bridge the gap between theoretical pricing models and real-time market visualization. The application provides a live quantitative dashboard for Black-Scholes-Merton (BSM) pricing and calculates 'Greeks' for risk management. \n\nA key focus was implementing high-performance Monte Carlo simulations and creating intuitive 3D visualizations to help users understand the relationship between option premiums, strike prices, and time to maturity.",
            challenges: [
                "Optimizing computationally expensive Monte Carlo simulations for real-time user interaction.",
                "Visualizing complex multi-dimensional data (volatility surfaces) in an accessible web interface.",
                "Ensuring accuracy of financial models against theoretical benchmarks."
            ],
            results: [
                "Reduced Monte Carlo execution time for 100,000 paths by 20x using NumPy vectorization.",
                "Deployed a live interactive dashboard capable of real-time sensitivity analysis.",
                "Enabled intuitive visualization of 3D volatility surfaces using Plotly."
            ],
            tags: ["Python", "Streamlit", "NumPy", "Quantitative Finance", "Plotly", "Monte Carlo"],
            imageUrl: "/projects/options-analytics/cover-greeks-simple.png",
            github: "https://github.com/aadeshchahal/Options-Pricer",
            link: "https://options-pricer-aadeshchahal.streamlit.app/",
            embedUrl: "https://options-pricer-aadeshchahal.streamlit.app/?embed=true",
            documents: [],
            gallery: []
        },
        {
            id: "p3",
            title: "Ice Hockey Stick Material Selection",
            description: "Designed a CFRP ice hockey stick optimizing for durability, flex, and weight using FEA and Ashby charts.",
            detailedDescription: "Led a team of 4 to design a Carbon Fiber Reinforced Polymer (CFRP) ice hockey stick. The goal was to balance conflicting requirements of durability, flex, lightness, and cost to meet NHL/IIHF performance standards. \n\nWe utilized Ashby charts for material selection and conducted extensive Finite Element Analysis (FEA) in Abaqus and Ansys to simulate bending and torsional loads, ensuring the stick remained under 400g while maintaining structural integrity.",
            challenges: [
                "Balancing durability, flex, and weight to meet strict NHL/IIHF standards.",
                "Maintaining structural integrity under complex torsional loads while keeping weight below 400g.",
                "Selecting a manufacturing process that is scalable and cost-effective."
            ],
            results: [
                "Optimized material selection to meet all performance criteria.",
                "Selected Resin Transfer Molding (RTM) as the optimal manufacturing route.",
                "Projected a 15% reduction in production costs while achieving target surface finish."
            ],
            tags: ["Materials Engineering", "FEA", "SolidWorks", "Composite Design", "Abaqus"],
            imageUrl: "/projects/hockey/cover.jpg",
            documents: [
                { title: "Project Framing Report", url: "/pdfs/Ice Hockey Project/Group 10 Framing Report.pdf" },
                { title: "Final Design Report", url: "/pdfs/Ice Hockey Project/Group_10_Final_Report.pdf" }
            ],
            gallery: [
                { url: "/projects/hockey/3 Point Bending Diagram 2.png", caption: "3 Point Bending Diagram", type: "image" },
                { url: "/projects/hockey/Standardized Flex Equation.png", caption: "Standardized Flex Equation", type: "image" },
                { url: "/projects/hockey/Index Minimizing Mass.png", caption: "Index Minimizing Mass", type: "image" },
                { url: "/projects/hockey/Index Minimizing Cost.png", caption: "Index Minimizing Cost", type: "image" },
                { url: "/projects/hockey/Graph optimizing for minimum mass and minimum cost.png", caption: "Graph Optimizing for Minimum Mass and Cost", type: "image" },
                { url: "/projects/hockey/Resin Transfer Molding Cost.png", caption: "Resin Transfer Molding Cost Analysis", type: "image" },
            ]
        },
    ],
};
