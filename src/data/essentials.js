import dsa from "../Asset/essentials/dsa.png"
import amazon from "../Asset/essentials/amazon.jpg"
import careerPages from "../Asset/essentials/careerPages.webp"
import ai from "../Asset/essentials/ai.webp"
import interviewGuide from "../Asset/essentials/interviewGuide.jpg"
import interviewPrep from "../Asset/essentials/interviewPrep.jpg"
import microsoft from "../Asset/essentials/microsoft.jpg"
import skills from "../Asset/essentials/skills.avif"
import techNews from "../Asset/essentials/techNews.jpg"
import tools from "../Asset/essentials/tools.jpg"
import google from "../Asset/essentials/google.jpg"


export const essentials = [
    {
      id: 1,
      name: "Data Structures and Algorithms",
      description: "Learn the fundamentals of data structures and algorithms to improve your coding skills and crack tech interviews",
      links: [
        { text: "TakeUForward", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        { text: "Arsh DSA Sheet", url: "https://www.proelevate.in/dsa-practice" },
        { text: "NeetCode.io", url: "https://neetcode.io/practice" },
        { text: "Love Babbar DSA Sheet", url: "https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view" },
        { text: "Coder Army", url: "https://youtube.com/playlist?list=PLQEaRBV9gAFu4ovJ41PywklqI7IyXwr01&si=U4qWQUqKjaaT9V2y" },
        { text: "College Wallah", url: "https://youtube.com/playlist?list=PLxgZQoSe9cg0df_GxVjz3DD_Gck5tMXAd&si=gBu3UtAVyly-8aOR" },
        { text: "Apna College DSA", url: "https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ&si=UxTywvqn9Jmp-jpC" },        
        { text: "CSES Sheet", url: "https://cses.fi/problemset/" },        
        { text: "Competetive Programming", url: "https://whimsical.com/codeforces-candidate-master-roadmap-by-love-babbar-CiXPPD3CnwoXPr2d8Ajx1h" },        
        { text: "Algorithms for Competetive Programming", url: "https://cp-algorithms.com/" },        
      ],
      icon:dsa
    },
    {
        id: 2,
        name: "Prepare for Tech Interviews",
        description: "Practice answering common interview questions to improve your chances of getting hired",
        links: [
          { text: "Company Wise Specific Question", url: "https://github.com/hxu296/leetcode-company-wise-problems-2022/tree/main/companies" },
          { text: "Company Wise Specific Question", url: "https://www.interviewbit.com/coding-interview-questions/" },
          { text: "Company Wise Specific Question", url: "https://github.com/krishnadey30/LeetCode-Questions-CompanyWise/blob/master/adobe_2year.csv" },
          { text: "LeetCode: Interview Practice Problems", url: "https://leetcode.com/interview/" }
        ],
        icon:interviewPrep
      },
      {
        id: 3,
        name: "AI and Machine Learning",
        description: "Learn from the best AI and machine learning resources",
        links: [
          { text: "AI Essentials", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/17763/foundations-of-prompt-engineering" },
          { text: "ChatGPT Mastery", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
          { text: "Google AI Magic", url: "https://www.cloudskillsboost.google/course_templates/536" },
          { text: "Harvard AI Introduction", url: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python/2023-05" },
          { text: "Microsoft AI Basics", url: "https://lnkd.in/eYNWzXUX" },
          { text: "Prompt Engineering Pro", url: "https://learnprompting.org/" },
          { text: "Google's Ethical AI", url: "https://www.cloudskillsboost.google/course_templates/554" },
          { text: "Machine Learning by Harvard", url: "https://pll.harvard.edu/course/data-science-machine-learning" },
          { text: "Language Models by LangChain", url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/" },
          { text: "Bing Chat Applications", url: "https://lnkd.in/ejN-qrVy" },
          { text: "Generative AI by Microsoft", url: "https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/" },
          { text: "Amazon's AI Strategy", url: "https://explore.skillbuilder.aws/learn/public/learning_plan/view/1909/generative-ai-learning-plan-for-decision-makers" },
          { text: "AI for Everyone", url: "https://www.deeplearning.ai/courses/generative-ai-for-everyone/" },
          { text: "AWS AI Foundations", url: "https://www.coursera.org/learn/generative-ai-with-llms" },
          { text: "Generative AI Learning Path", url: "https://www.cloudskillsboost.google/paths/118?fbclid=PAAaa955BDCZ0uc6rEtN8iivd9GOu7XCc1psKZ6WbM7xkluSBjmtbF8-gHmWk_aem_th_AQigcI8vaLLk67yG30tifPWBWY1wy-hqCnsFH_7e52QkCBHMRFF9eoA46ttORHOFZ1Q" }
        ],
        icon:ai
      },
      {
        id: 4,
        name: "Upskill with Microsoft Courses",
        description: "Take online courses offered by Microsoft to improve your skills in Azure, AI, and more",
        links : [
          { text: "Microsoft Learn Paths", url: "https://learn.microsoft.com/en-us/learn/paths" },
          { text: "Microsoft Certifications", url: "https://learn.microsoft.com/en-us/certifications" },
          { text: "Azure Fundamentals", url: "https://learn.microsoft.com/en-us/training/educator-center/programs/msle/fundamentals" },
          { text: "Azure Developer", url: "https://learn.microsoft.com/en-us/azure/developer" },
          { text: "Azure Administrator", url: "https://learn.microsoft.com/en-us/training/career-paths/administrator" },
          { text: "Microsoft 365 Administrator", url: "https://learn.microsoft.com/en-us/microsoft-365/admin" },
          { text: "Power Apps", url: "https://powerapps.microsoft.com/learn" },
          { text: "Power Automate", url: "https://powerautomate.microsoft.com/learn" },
          { text: "Power BI", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/" },
          { text: "MSDN Blogs", url: "https://blogs.msdn.microsoft.com/" },
          { text: "MSDN Forums", url: "https://social.msdn.microsoft.com/" },
          { text: "On-Demand Courses", url: "https://mva.microsoft.com/" },
          { text: "Microsoft Imagine Academy", url: "https://www.microsoft.com/en-us/education/imagine" },
          { text: "Microsoft Partner Network", url: "https://partner.microsoft.com/" }
        ],
        icon:microsoft
      },
      {
        id: 5,
        name: "Learn with Google Courses",
        description: "Take online courses offered by Google to improve your skills in Cloud, AI, and more",
        links:[
          { text: "Google Ads Certifications", url: "https://skillshop.withgoogle.com/" },
          { text: "Google Analytics Certifications", url: "https://skillshop.withgoogle.com/" },
          { text: "Google Cloud Certifications", url: "https://skillshop.withgoogle.com/" },
          { text: "Career Certificates", url: "https://grow.google/intl/ssa-en/google-career-certificates/" },
          { text: "Online Skills Training", url: "https://grow.google/" },
          { text: "Skills Boost", url: "https://cloud.google.com/learn/training/" },
          { text: "Google Cloud Tech on YouTube", url: "https://www.youtube.com/googlecloudplatform" },
          { text: "Google Data Analytics", url: "https://www.coursera.org/professional-certificates/google-data-analytics" },
          { text: "Google Project Management", url: "https://www.coursera.org/professional-certificates/google-project-management" },
          { text: "Google IT Support", url: "https://www.coursera.org/professional-certificates/google-it-support" },
          { text: "Free Google Certifications", url: "https://www.classcentral.com/institution/google" }
        ],
        icon:google
      },
      {
        id: 6,
        name: "Upskill with Amazon Courses",
        description: "Take online courses offered by Amazon to improve your skills in Cloud, AI, and more",
        links : [
          { text: "AWS Training and Certification", url: "https://aws.amazon.com/training" },
          { text: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
          { text: "AWS Blogs", url: "https://aws.amazon.com/blogs" },
          { text: "Amazon Alexa Skills Kit Developer Documentation", url: "https://developer.amazon.com/alexa" },
          { text: "Amazon SageMaker Tutorials and Documentation", url: "https://aws.amazon.com/sagemaker" },
          { text: "Amazon CodeGuru Code Review and Recommendations", url: "https://aws.amazon.com/codeguru" },
          { text: "Coursera AWS Courses", url: "https://www.coursera.org/search?query=aws" },
        ],
        icon:amazon
      },
      {
        id: 7,
        name: "Some Channels to Follow",
        description: "Follow these YouTube channels to learn from tech experts and stay up-to-date with the latest tech trends",
        links: [
          { text: "Krishan Kumar: For New Opportunities", url: "https://whatsapp.com/channel/0029Va6I79K60eBfQ92DwH0W" },
          { text: "Arsh Goyal: For New Opportunities", url: "https://whatsapp.com/channel/0029Va9sXNw3AzNa6mBs060w" },
          { text: "3Blue1Brown: Animated Tech Explanations", url: "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" },
          { text: "freeCodeCamp: Learn to Code with Free Resources", url: "https://www.youtube.com/c1hannel/UC8butISFwT-Wl7EV0hUK0BQ" },
          { text: "Code With Harry : Learn New Technologies", url: "https://www.youtube.com/@CodeWithHarry"},
          ],
          icon:techNews ,
        },
        {
          id: 8,
          name: "Important Sites to Visit",
          description: "Follow these Sites to improve your skills",
          links: [
            { text: "Character AI : To Improve Your Speaking Skills via Direct Call with AI Character.", url: "https://character.ai/"},
            { text: "Ask Senior : A Valuable Resource for Coders. ", url: "https://asksenior.in/"},
            { text: "500+ Project Ideas : Different Ideas for Building Projects. ", url: "https://docs.google.com/spreadsheets/d/1wK6bay-lbCzwh97wjXYPyeGiy3OE4jpl8KvbPGxa610/edit?gid=0#gid=0" },
            { text: "Machine Learning Mastery : A Useful Resource for Ai Enthusiast.", url: "https://machinelearningmastery.com/start-here/" },
            { text: "Web Dev : A Useful Resource for Web Dev Enthusiast.", url: "https://web.dev/learn/performance"},
            { text: "Java Script Info : A Useful Resource for JavaScript Enthusiast.", url: "https://javascript.info/"},
            ],
            icon:skills,
        },
      {
        id: 9,
        name: "Interview Guides from Top Tech Companies",
        description: "Prepare for your next interview with these publicly available guides from Microsoft, Google, and Amazon",
        links: [
          { text: "Google Interview Guide", url: "https://www.google.com/about/careers/applications/how-we-hire/" },
          { text: "Microsoft Interview Guide", url: "https://careers.microsoft.com/v2/global/en/hiring-tips" },
          { text: "Amazon Interview Guide", url: "https://www.amazon.jobs/content/en/how-we-hire/interviewing-at-amazon" }
        ],
        icon:interviewGuide,
      },
      {
        id: 10,
        name: "Official Career Pages of 50+ Tech Companies",
        description: "Explore the official career pages of top tech companies to find job opportunities and learn more about their cultures",
        links: [
          { text: "Accenture", url: "https://www.accenture.com/careers" },
          { text: "Adobe", url: "https://www.adobe.com/careers.html" },
          { text: "Amazon", url: "https://www.amazon.jobs/en/" },
          { text: "Apple", url: "https://www.apple.com/careers/in/index.html" },
          { text: "Atlassian", url: "https://www.atlassian.com/company/careers" },
          { text: "Barclays", url: "https://home.barclays/careers/" },
          { text: "Bloomberg", url: "https://careers.bloomberg.com/job/search" },
          { text: "Capgemini", url: "https://jobs.capgemini.com" },
          { text: "Cisco", url: "https://www.cisco.com/c/en/us/about/careers.html" },
          { text: "Dell", url: "https://jobs.dell.com/" },
          { text: "Deloitte", url: "https://jobsindia.deloitte.com/" },
          { text: "EY", url: "https://careers.ey.com/" },
          { text: "Flipkart", url: "https://www.flipkartcareers.com/" },
          { text: "Goldman Sachs", url: "https://www.goldmansachs.com/careers/" },
          { text: "Google", url: "https://careers.google.com/" },
          { text: "HCL Technologies", url: "https://www.hcltech.com/careers" },
          { text: "Hyland", url: "https://www.hyland.com/en/company/careers" },
          { text: "IBM", url: "https://www.ibm.com/in-en/employment/" },
          { text: "Infosys", url: "https://career.infosys.com" },
          { text: "Intel", url: "https://jobs.intel.com/" },
          { text: "Intuit", url: "https://www.intuit.com/in/careers/" },
          { text: "J.P.Morgan", url: "https://careers.jpmorgan.com" },
          { text: "Juniper Networks", url: "https://careers.juniper.net/" },
          { text: "LinkedIn", url: "https://careers.linkedin.com/" },
          { text: "Magic Bricks", url: "https://www.magicbricks.com/careers/" },
          { text: "Meta", url: "https://www.metacareers.com/jobs" },
          { text: "Microsoft", url: "https://careers.microsoft.com/" },
          { text: "Mindtree", url: "https://www.mindtree.com/careers" },
          { text: "Morgan Stanley", url: "https://morganstanley.com/careers" },
          { text: "Netflix", url: "https://jobs.netflix.com/" },
          { text: "NVIDIA", url: "https://www.nvidia.com/en-in/about-nvidia/careers/" },
          { text: "Oracle", url: "https://careers.oracle.com/jobs/#en/sites/jobsearch/" },
          { text: "PayPal", url: "https://www.paypal.com/in/webapps/mpp/jobs" },
          { text: "PhonePe", url: "https://www.phonepe.com/careers/" },
          { text: "Qualcomm", url: "https://www.qualcomm.com/en-in/about-nvidia/careers/" },
          { text: "Rubrik", url: "https://www.rubrik.com/company/careers" },
          { text: "Salesforce", url: "https://www.salesforce.com/in/company/careers/" },
          { text: "Samsung", url: "https://www.samsung.com/in/about-us/careers/" },
          { text: "SAP Labs", url: "https://jobs.sap.com/" },
          { text: "ServiceNow", url: "https://careers.servicenow.com/careers/" },
          { text: "Siemens", url: "https://jobs.siemens.com/careers" },
          { text: "Sprinklr", url: "https://www.sprinklr.com/careers/" },
          { text: "Snapchat", url: "https://careers.snap.com/" },
          { text: "TCS (Tata Consultancy Services)", url: "https://www.tcs.com/careers" },
          { text: "Tech Mahindra", url: "https://careers.techmahindra.com/" },
          { text: "Uber", url: "https://www.uber.com/in/en/careers/" },
          { text: "VMware", url: "https://www.broadcom.com/company/careers" },
          { text: "Walmart", url: "https://careers.walmart.com/" },
          { text: "Wipro", url: "https://careers.wipro.com/careers-home/" },
          { text: "Zoho Corporation", url: "https://www.zoho.com/careers/" },
          { text: "ZS", url: "https://www.zs.com/careers" },
        ],
        icon:careerPages,
        
    },
    {
        id: 11,
        name: "CV Builder AI Tools",
        description: "Explore the AI-powered CV builder tools to create a professional resume",
        links: [
          { text: "Kickresume", url: "https://www.kickresume.com/en/" },
          { text: "Novoresume", url: "https://novoresume.com/" },
          { text: "LiveCareer", url: "https://www.livecareer.com/" },
          { text: "AutoApply Jobs", url: "https://autoapply.jobs/" },
          { text: "Resume.io", url: "https://resume.io/" },
          { text: "Jobhunnt", url: "https://jobhunnt.com/" },
          { text: "Zety", url: "https://zety.com/" },
          { text: "JobScan", url: "https://www.jobscan.co/" },
          { text: "MyPerfectResume", url: "https://www.myperfectresume.com/t3" },
          { text: "Resume Builder", url: "https://www.resumebuilder.com/" },
        ],
        icon:tools,
        
      },
      

]


