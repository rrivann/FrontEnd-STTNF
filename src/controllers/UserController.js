/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from '../data/users';

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const methodFormatUser = (title) => {
  let user = [];
  let formatName;
  users.map(({name, age, major}) => {
    formatName = {name: `${title}. ${name}`, age: age, major: major};
    user.push(formatName);
  });
  return user;
};
const formatUser = (title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(methodFormatUser(title));
    }, 3000);
  });
};

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const methodFindByName = (name) => {
  return users.find((user) => {
    return user.name == name;
  });
};
const findByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(methodFindByName(name));
    }, 2000);
  });
};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const methodFilterByMajor = (major) => {
  return users.filter((user) => {
    return user.major == major;
  });
};
const filterByMajor = (major) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(methodFilterByMajor(major));
    }, 4000);
  });
};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export {formatUser, findByName, filterByMajor};
