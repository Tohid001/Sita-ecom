class AppFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  search() {
    const keyword = this.queryString.keyword
      ? { name: { $regex: this.queryString.keyword, $options: "i" } }
      : {};
    console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryString };
    console.log(queryCopy);

    //removing some fields for, category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => {
      delete queryCopy[key];
    });
    console.log(queryCopy);

    //filter by price and rating
    let queryStr = JSON.stringify(queryCopy);
    // console.log(queryStr);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    this.query = this.query.find(JSON.parse(queryStr));
    // console.log(queryCopy);
    // console.log(queryStr);
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryString.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = AppFeature;