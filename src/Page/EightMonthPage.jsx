import MonthPage from "../Component/MonthPage";

const EightMonthPage = () => {
  const clssDes = {
    img: "8.jpg",
    className: " ৮ম শ্রেণি - অনলাইন ব্যাচ ২০২৫",
  };

  const courses = [
    {
      title: "৮ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ ১ মাসের জন্য ]",
      duration: "১ মাসের কোর্স",
      discount: 250,
      price: 2500,
      link: "https://10minuteschool.com/product/class-8-online-batch-2025/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250179&promo=1monthob25",
    },
    {
      title: "৮ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ ৩ মাসের জন্য ]",
      duration: "৩ মাসের কোর্স",
      discount: 3000,
      price: 8000,
      link: "https://10minuteschool.com/product/class-8-online-batch-2025/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250180",
    },
    {
      title: "৮ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ ৬ মাসের জন্য ]",
      duration: "৬ মাসের কোর্স",
      discount: 5000,
      price: 15000,
      link: "https://10minuteschool.com/product/class-8-online-batch-2025/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250181&promo=6monthob25",
    },
    {
      title: "৮ম শ্রেণি – অনলাইন ব্যাচ ২০২৫ [ পুরো বছরের জন্য ]",
      duration: "১ বছরের কোর্স",
      discount: 14500,
      price: 27500,
      link: "https://10minuteschool.com/product/class-8-online-batch-2025/?aff=V2UNK0000ab53&utm_medium=affiliation&utm_source=43859&utm_campaign=null_undefined&utm_content=null&type=affiliate&sku_id=250182&promo=12monthob25",
    },
  ];
  const faqData = [
    {
      title: "'৮ম শ্রেণি - অনলাইন ব্যাচ ২০২৫' কার জন্য",
      content: [
        "বছরের শুরু থেকেই ৮ম শ্রেণির প্রতিটি বিষয়ের ছাত্র-ছাত্রী যারা গোছানো প্রস্তুতি নিতে চায়",
        "প্রতিটি বিষয়ের মূল পাঠ্যসূচি বোঝার পাশাপাশি বেসিক শক্তিশালী করতে চায়",
        "যারা রেগুলার ক্লাস ও রুটিন ফলো করে পড়াশোনার সম্পূর্ণ প্রস্তুতি করতে চায়",
        "অনুশীলন, পরীক্ষা ও বিশ্লেষণ পরীক্ষার মাধ্যমে নিজেদের অবস্থান বুঝতে চায়",
      ],
    },
    {
      title: "'৮ম শ্রেণি - অনলাইন ব্যাচ ২০২৫' তোমাকে কিভাবে প্রস্তুত করবে?",
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

export default EightMonthPage;
