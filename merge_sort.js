const merge = (nums1, nums2) => {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums2[j] > nums1[i]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }

  if (i < nums1.length) res.push(...nums1.slice(i));
  if (j < nums1.length) res.push(...nums2.slice(j));

  return res;
};

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  let midPoint = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, midPoint));
  let right = mergeSort(nums.slice(midPoint));

  return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73]));
