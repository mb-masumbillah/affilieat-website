import MonthPage from "../Component/MonthPage";

const Hsc = () => {
  const clssDes = {
    img: "hsc..jpg",
    className: "HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)",
    details: "তোমরা যারা এইচএসসি ২০২৬ পরীক্ষায় বিজ্ঞান বিভাগ থেকে অংশ নিচ্ছো, তোমাদের নিশ্চয়ই বিজ্ঞান বিভাগের আটটি বিষয়ের একটি পূর্ণাঙ্গ প্রস্তুতি প্রয়োজন? তোমাদের কথা চিন্তা করেই টেন মিনিট স্কুল নিয়ে এসেছে এইচএসসি পরীক্ষার বিজ্ঞান বিভাগের আটটি বিষয়ের উপর একটি পূর্ণাঙ্গ কোর্স “HSC 2026 অনলাইন ব্যাচ (PCMB)”। এইচএসসি পরীক্ষায় বিজ্ঞান বিভাগের বিষয়ে GPA 5 নিশ্চিত করতে এই একটি কোর্সই তোমার জন্য যথেষ্ট। কেননা এই কোর্সে তোমার এইচএসসি পরীক্ষার জন্য প্রয়োজনীয় সকল প্রস্তুতি পূর্ণাঙ্গভাবে নিশ্চিত করা হবে।এই কোর্সে তোমাদের এইচএসসি পরীক্ষায় পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান ও উচ্চতর গণিতের প্রথম পত্র ও দ্বিতীয় পত্র বিষয় নিয়েই পূর্ণাঙ্গ প্রস্তুতি নিশ্চিত করা হবে, যার মধ্যে থাকবে রেকর্ডেড ক্লাস, লাইভ ক্লাস, সলভ ক্লাস, ডাউট সলভ, ইন ক্লাস পোল, ডেইলি পরীক্ষা, উইকলি পরীক্ষা, অধ্যায়ভিত্তিক পরীক্ষা, ফাইনাল মডেল টেস্ট, লেকচার শিট, দাগানো স্লাইড, ফাইনাল সাজেশন ইত্যাদি নানান বিষয়। অর্থাৎ, পুরো কলেজ লাইফে তোমাদের প্রস্তুতি নিয়ে থাকবে না কোনো ঘাটতি! একদিকে পড়াশোনা হবে তুমুল বেগে সাথে নিজেকে যাচাই করে প্রস্তুতি ও প্রস্তুতির ঘাটতি সম্পর্কেও পেয়ে যাবে সম্পূর্ণ ধারণা।তাই, এইচএসসির বিজ্ঞান বিভাগের বিষয়ে A+ নিশ্চিত করার পাশাপাশি ১০০ তে ১০০ প্রস্তুতি নিতে এখনই এনরোল করো এই HSC 2026 অনলাইন ব্যাচ কোর্সটিতে!"
  };

  const courses = [
    {
      title: "HSC 26 অনলাইন ব্যাচ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি)",
      duration: "",
      discount: 2500,
      price: 6000,
      link: "https://10minuteschool.com/product/hsc-26-online-batch-bangla-english-ict/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250030&promo=hsc26bei",
    },
    {
      title: "HSC 26 অনলাইন ব্যাচ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি) + ( প্রিন্টেড লেকচার শিট )",
      duration: "",
      discount: 2650,
      price: 7500,
      link: "https://10minuteschool.com/product/hsc-26-online-batch-bangla-english-ict/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250073&promo=lecturesheetbei",
    },
    {
      title: "PCMB (Cycle 1-2)",
      duration: "",
      discount: 2500,
      price: 6000,
      link: "https://10minuteschool.com/product/hsc-2026-online-batch/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250028&promo=hsc26pcmb2",
    },
    {
      title: "PCMB (Cycle 1-2) + লেকচার শিট (Cycle 2)",
      duration: "",
      discount: 2700,
      price: 7200,
      link: "https://10minuteschool.com/product/hsc-2026-online-batch/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250157&promo=hsc26pcmb2lec",
    },
    // {
    //   title: "PCMB (Cycle 1-2) + লেকচার শিট (Cycle 1+2)",
    //   duration: "",
    //   discount: 5000,
    //   price: 15000,

    //   link: "",
    // },
    {
      title: "PCMB (Cycle 1-4)",
      duration: "",
      discount: 10000,
      price: 19000,
      link: "https://10minuteschool.com/product/hsc-2026-online-batch/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250029&promo=hsc26pcmb4",
    },
    {
      title: "PCMB (Cycle 1-4) + লেকচার শিট (Cycle 2)",
      duration: "",
      discount: 10000,
      price: 20000,
      link: "https://10minuteschool.com/product/hsc-2026-online-batch/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250158&promo=sciencecombo",
    },
    {
      title: "PCMB (Cycle 1-4) + লেকচার শিট (Cycle 1+2)",
      duration: "",
      discount: 10000,
      price: 21000,
      link: "https://10minuteschool.com/product/hsc-2026-online-batch/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250217&promo=hsc26pcmblec12",
    },
    {
      title: "PCMB (Cycle 1-4) + BEI",
      duration: "",
      discount: 13000,
      price: 25000,
      link: "https://10minuteschool.com/product/hsc-2026-online-batch/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250031&promo=hsc26bundle",
    },
    {
      title: "PCMB (Cycle 1-4) + BEI এবং লেকচার শিট (Cycle 2)",
      duration: "",
      discount: 13000,
      price: 27500,
      link: "https://10minuteschool.com/product/hsc-2026-online-batch/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250163&promo=completepackage",
    },
    {
      title: "PCMB (Cycle 1-4) + BEI এবং লেকচার শিট (Cycle 1+2)",
      duration: "",
      discount: 13000,
      price: 28500,
      link: "https://10minuteschool.com/product/hsc-2026-online-batch/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250218&promo=fullhsc26cyc1to4",
    },
  ];

  const faqData = [
    {
      title: "'HSC - অনলাইন ব্যাচ ২০২6' কার জন্য",
      content: [
        "বছরের শুরু থেকেই HSC প্রতিটি বিষয়ের ছাত্র-ছাত্রী যারা গোছানো প্রস্তুতি নিতে চায়",
        "প্রতিটি বিষয়ের মূল পাঠ্যসূচি বোঝার পাশাপাশি বেসিক শক্তিশালী করতে চায়",
        "যারা রেগুলার ক্লাস ও রুটিন ফলো করে পড়াশোনার সম্পূর্ণ প্রস্তুতি করতে চায়",
        "অনুশীলন, পরীক্ষা ও বিশ্লেষণ পরীক্ষার মাধ্যমে নিজেদের অবস্থান বুঝতে চায়",
      ],
    },
    {
      title: "'HSC - অনলাইন ব্যাচ ২০২6' তোমাকে কিভাবে প্রস্তুত করবে?",
      content: [
        "দেশের অভিজ্ঞ টিচাররা নির্দিষ্ট লাইভ ক্লাসের মাধ্যমে প্রতিটি বিষয়ের বেসিক ক্লিয়ার করবেন",
        "প্রতিটি বিষয়ের জন্য রয়েছে পৃথক গাইডলাইন এবং সাজেশন",
        "ক্লাস শেষে প্রশ্ন উত্তর অনুশীলনের জন্য থাকবে এক্সক্লুসিভ টিচার",
      ],
    },
    {
      title: "পুরো সিলেবাস ভিত্তিক পরীক্ষা প্রস্তুতি",
      content: [
        "প্রতিটি ক্লাসের পর হোমওয়ার্ক এবং শিক্ষার্থীদের ভুলগুলো ট্র্যাক করা হবে",
        "উত্তর, ব্যাখ্যা, এবং সংশোধন পরীক্ষার মাধ্যমে শিক্ষার্থীদের প্রস্তুতি নিশ্চিত করা হবে",
        "সব ক্লাসের নোট এবং গুরুত্বপূর্ণ প্রশ্নের সমাধান দেওয়া হবে",
      ],
    },
    {
      title: "এক্সট্রা কেয়ার",
      content: [
        "বছর শেষে শিক্ষার্থীদের মধ্যে নতুন ক্লাসের প্রস্তুতির জন্য বিশেষ আয়োজন",
        "বিশেষভাবে প্রস্তুত প্রশ্ন ও পদ্ধতিতে শিক্ষার্থীদের বোঝানো হবে",
        "অভিভাবক-শিক্ষক মিটিং ও বিশেষ আলোচনা থাকবে",
      ],
    },
  ];
  return (
    <div>
      <MonthPage
        courses={courses}
        faqData={faqData}
        clssDes={clssDes}
      ></MonthPage>
    </div>
  );
};

export default Hsc;
