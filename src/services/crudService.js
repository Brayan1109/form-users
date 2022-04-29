import axios from "axios";
const crudService = () => {
  const URL =
    "https://contability-bav-default-rtdb.firebaseio.com/data/user1.json";

  const getData = async () => {
    const res = await axios.get(URL);
    return res;
  };

  const postData = async (data) => {
    let res;

    if (data) {
      res = await axios.post(URL, data);
    }
    return res;
  };

  const deleteData = async (id) => {
    const url = `https://contability-bav-default-rtdb.firebaseio.com/data/user1/${id}.json`;
    const res = await axios.delete(url);
    return res;
  };

  const updateData = async (id, data) => {
    const url = `https://contability-bav-default-rtdb.firebaseio.com/data/user1/${id}.json`;
    const res = await axios.put(url, data);
    return res;
  };

  return {
    getData,
    postData,
    deleteData,
    updateData,
  };
};

export default crudService;
