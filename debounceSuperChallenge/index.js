const cafeDataArr = [
  {
    heading: "Our Commitment to Our Growers",
    teaser:
      "We are committed to providing the best possible prices to our coffee growers. We pay a premium price for their beans, which allows them to earn a living wage.",
  },
  {
    heading: "Our Commitment to Our Customers",
    teaser:
      "We are committed to providing the best possible coffee to our customers. We source only the finest beans from around the world and roast them to perfection.",
  },
  {
    heading: "Explore Our Menu",
    teaser:
      "We offer a wide range of coffee drinks, from espressos to lattes. We also have a selection of pastries and other treats to enjoy with your coffee.",
  },
  {
    heading: "Brewing Techniques",
    teaser:
      "We use a variety of brewing techniques to make our coffee, including pour-over, French press, and espresso. Each method brings out the unique flavors of the beans.",
  },
  {
    heading: "Our Story",
    teaser:
      "We are a family-owned business that has been roasting coffee for over 50 years. Our passion for coffee is reflected in every cup we serve.",
  },
  {
    heading: "Visit Us Today",
    teaser:
      "We are open seven days a week, from 6am to 8pm. Stop by and enjoy a cup of coffee with us!",
  },
];

function* fetchDataGenartor(maxSections = 6) {
  let sectionCount = 0;
  while (true) {
    if (sectionCount >= maxSections) {
      console.log("Max sections reached");
      return;
    }

    const fakeApiResponse = { sectionText: cafeDataArr[sectionCount] };

    yield new Promise((resolve) =>
      setTimeout(() => resolve(fakeApiResponse), 100)
    );
    sectionCount++;
  }
}

const generator = fetchDataGenartor();

function handleScroll() {
  const result = generator.next();
  console.log(result);

  if (result.done) {
    window.removeEventListener("scroll", handleScroll);
    console.log("All sections loaded");
    return;
  } else {
    result.value.then((data) => {
      console.log(data.sectionText);

      const section = document.createElement("section");
      const sectionHeading = document.createElement("h3");
      const sectionTeaser = document.createElement("p");
      sectionHeading.textContent = data.sectionText.heading;
      sectionTeaser.textContent = data.sectionText.teaser;
      section.appendChild(sectionHeading);
      section.appendChild(sectionTeaser);
      document.body.appendChild(section);
    });
  }
}

function debounce(func, delay = 100) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

document.addEventListener("scroll", debounce(handleScroll, 100));
