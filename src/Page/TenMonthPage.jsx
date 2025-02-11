import MonthPage from "../Component/MonthPage";

const TenMonthPage = () => {
  const clssDes = {
    img: "10.jpg",
    className: " ১০ম শ্রেণি - অনলাইন ব্যাচ ২০২৫",
  };

  const courses = [
    {
      title: "১০ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ ১ মাসের জন্য ]",
      duration: "১ মাসের কোর্স",
      discount: 250,
      price: 2500,
      link: "https://10minuteschool.com/product/class-10-online-batch-2025/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250189&promo=1monthob25",
    },
    {
      title: "১০ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ ৩ মাসের জন্য ]",
      duration: "৩ মাসের কোর্স",
      discount: 3000,
      price: 8000,
      link: "https://10minuteschool.com/product/class-10-online-batch-2025/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250190",
    },
    {
      title:
        "১০ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ সম্পূর্ণ বছর এবং SSC 2026 শেষ মুহূর্তের প্রস্তুতি কোর্স  ]",
      duration: "সম্পূর্ণ বছর",
      discount: 17500,
      price: 30500,
      link: "https://10minuteschool.com/product/class-10-online-batch-2025/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250191&promo=12monthob25x",
    },
    {
      title:
        "১০ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ সম্পূর্ণ বছর (বিজ্ঞান বিভাগ) + বাংলা, আই.সি.টি. + SSC 2026 শেষ মুহূর্তের প্রস্তুতি কোর্স",
      duration: "সম্পূর্ণ বছর",
      discount: 19500,
      price: 34000,
      link: "https://10minuteschool.com/product/class-10-online-batch-2025/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250229&promo=12monthfull10",
    },
    {
      title:
        "১০ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ সকল বিভাগ ] বাংলা, আই.সি.টি., সাধারন গনিত [SSC 2026 ব্যাচ]",
      duration: "সম্পূর্ণ বছর",
      discount: 500,
      price: 3500,
      link: "https://10minuteschool.com/product/class-10-bangla-english-ict-math-for-ssc-2026/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&promo=2026class10bei",
    },
  ];
  const faqData = [
    {
      title: "'১০ম শ্রেণি - অনলাইন ব্যাচ ২০২৫' কার জন্য",
      content: [
        "বছরের শুরু থেকেই ১০ম শ্রেণির প্রতিটি বিষয়ের ছাত্র-ছাত্রী যারা গোছানো প্রস্তুতি নিতে চায়",
        "প্রতিটি বিষয়ের মূল পাঠ্যসূচি বোঝার পাশাপাশি বেসিক শক্তিশালী করতে চায়",
        "যারা রেগুলার ক্লাস ও রুটিন ফলো করে পড়াশোনার সম্পূর্ণ প্রস্তুতি করতে চায়",
        "অনুশীলন, পরীক্ষা ও বিশ্লেষণ পরীক্ষার মাধ্যমে নিজেদের অবস্থান বুঝতে চায়",
      ],
    },
    {
      title: "'১০ম শ্রেণি - অনলাইন ব্যাচ ২০২৫' তোমাকে কিভাবে প্রস্তুত করবে?",
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

export default TenMonthPage;
