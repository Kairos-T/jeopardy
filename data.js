const gameData = {
  topics: [
    {
      id: "low-birth-rate",
      name: "Low Birth Rate",
      categories: [
        {
          name: "Low Birth Rate Globally",
          questions: [
            {
              points: 1,
              question:
                "As of 2021, what is the global total fertility rate (TFR)?",
              options: ["1) 2.1", "2) 1.97", "3) 2.2", "4) 0.97"],
              answer: "3) 2.2",
            },
            {
              points: 2,
              question:
                "What is one initiative that the Japanese government has implemented to reduce its low birth rate?",
              options: [
                "1) 3-day Work Weeks",
                "2) Higher Salary Enforcement",
                "3) 9-months Long Paid Leaves",
                "4) Flexible Work Schedules",
              ],
              answer: "4) Flexible Work Schedules",
            },
            {
              points: 3,
              question:
                "What is the primary reason for regions, like Sub-Saharan Africa and parts of South Asia, to have high birth rates?",
              options: [
                "1) Contraceptives are banned by law in these regions.",
                "2) Governments in these regions provide many financial incentives for large families.",
                "3) Early marriage and high fertility are actively promoted by religious and social leaders in these areas.",
                "4) Limited education for women, and the need for children to work and support the family.",
              ],
              answer:
                "4) Limited education for women, and the need for children to work and support the family.",
            },
          ],
        },
        {
          name: "Low Birth Rate in Singapore",
          questions: [
            {
              points: 1,
              question:
                "As of 2023, what is Singapore's total fertility rate (TFR)?",
              options: ["1) 2.1", "2) 1.5", "3) 0.97", "4) 3.0"],
              answer: "3) 0.97",
            },
            {
              points: 2,
              question:
                "What is the primary reason young Singaporeans delay marriage, contributing to the low birth rate?",
              options: [
                "1) Lack of affordable housing options",
                "2) Preference for career advancement and personal goals",
                "3) Inadequate social support from family",
                "4) High cost of starting a business",
              ],
              answer: "2) Preference for career advancement and personal goals",
            },
            {
              points: 3,
              question:
                "Given Singapore's emphasis on meritocracy and individual achievement, how might this cultural value inadvertently contribute to the low birth rate?",
              options: [
                "1) Discourages shared parenting, burdening one parent.",
                "2) Increases financial pressure for quality upbringing.",
                "3) Delays family planning as careers take priority.",
                "4) Promotes smaller families for individual focus.",
              ],
              answer: "3) Delays family planning as careers take priority.",
            },
          ],
        },
        {
          name: "Measures, Policies, and Actions",
          questions: [
            {
              points: 1,
              question:
                "Which of the following are policies/measures taken by the Singapore government to counter low birth rate?",
              options: [
                "1) Work-life harmony start-up",
                "2) Merdeka Generation Package",
                "3) Marriage and Parenthood Package",
                "4) Hospital Maternity Package",
              ],
              answer: "3) Marriage and Parenthood Package",
            },
            {
              points: 2,
              question: "What does WORK-HARMONY INITIATIVE offer?",
              options: [
                "1) Flexible Work Arrangements (FWAs), such as telecommuting, staggered hours, and part-time work.",
                "2) Parental Leave, Free childcare services for all employees",
                "3) Lifetime tax exemptions for parents with two or more children to encourage larger families.",
                "4) Mandatory implementation of a four-day workweek for all industries, regardless of operational needs. ",
              ],
              answer:
                "3) Lifetime tax exemptions for parents with two or more children to encourage larger families.",
            },
            {
              points: 3,
              question:
                "What is the baby bonus cash gift for each child in Singapore?",
              options: [
                "1) 1st, 2nd child: $11,000(+$3,000); 3rd & subsequent Child: $13,000(+$3,000)",
                "2) 1st, 2nd child: $10,000(+$2,500); 3rd & subsequent Child: $12,000(+$2,500)",
                "3) 1st, 2nd child: $12,000(+$3,000); 3rd Child: $14,000(+$3,000)",
                "4) 1st, 2nd child: $12,000(+$3,500); 3rd, 4th Child: $16,000(+$4,000)",
              ],
              answer:
                "1) 1st, 2nd child: $11,000(+$3,000); 3rd & subsequent Child: $13,000(+$3,000)",
            },
          ],
        },
        {
          name: "Sustainability",
          questions: [
            {
              points: 1,
              question:
                "What is the primary social challenge Singapore faces due to its declining birth rate and aging population?",
              options: [
                "1) Increased demand for green energy",
                "2) Pressure on healthcare and social services for the elderly",
                "3) Excessive population growth leading to overcrowding",
                "4) Decline in the diversity of the workforce",
              ],
              answer:
                "2) Pressure on healthcare and social services for the elderly",
            },
            {
              points: 2,
              question:
                "Which of the following is a potential consequence of Singapore's aging population, as it faces a growing demand for elderly care?",
              options: [
                "1) Decreased tax revenue, which limits funding for essential services.",
                "2) A surge in intergenerational cooperation and shared social responsibilities.",
                "3) Increased diversity and enhanced national identity preservation.",
                "4) Heightened generational divides, with younger generations feeling burdened.",
              ],
              answer:
                "4) Heightened generational divides, with younger generations feeling burdened.",
            },
            {
              points: 3,
              question:
                "How might Singapore's reliance on foreign labor affect its social cohesion and national identity?",
              options: [
                "1) It will increase the need for cultural diversity policies.",
                "2) It will eliminate generational divides and increase solidarity across age groups.",
                "3) It could lead to cultural fragmentation and challenges in maintaining racial harmony.",
                "4) It will strengthen cultural integration and preserve national identity.",
              ],
              answer:
                "3) It could lead to cultural fragmentation and challenges in maintaining racial harmony.",
            },
          ],
        },
        {
          name: "Trade-Offs",
          questions: [
            {
              points: 1,
              question: "What is the consequence of spending more on boosting low birth rates?",
              options: [
                "1) Immediate reduction of GDP",
                "2) Increased tax revenues",
                "3) Less demand for public services",
                "4) Fewer investments in other sectors",
              ],
              answer: "4) Fewer investments in other sectors",
            },
            {
              points: 2,
              question:
                "Which is a consequence of increasing land use for family-friendly facilities to encourage higher birth rates?",
              options: [
                "1) Increased housing costs for all residents",
                "2) Decreased demand for public transportation",
                "3) Less space for commercial and industrial development",
                "4) Improved environmental sustainability",
              ],
              answer:
                "3) Less space for commercial and industrial development",
            },
            {
              points: 3,
              question:
                "Why do we need to trade off our work culture for higher birth rates?",
              options: [
                "1) To reduce the burden on the healthcare system",
                "2) To ensure a sustainable workforce for the future",
                "3) To increase work-life balance for all employees",
                "4) To increase the number of working-age citizens",
              ],
              answer:
                "3) To increase work-life balance for all employees",
            },
          ],
        },
      ],
    },
  ],
};
