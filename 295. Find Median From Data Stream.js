/**
ref:https://leetcode.com/articles/find-median-from-data-stream/
follow up question:

1.If all integer numbers from the stream are between 0 and 100, how would you optimize it?
2.If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

ans: Counting Sort - [1~100] array, addNumber will take O(1), keep a pointer to track the median index which is O(1) for find Median too.

*/