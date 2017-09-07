#binary_search.py
def binary_search(data, target):
    data.sort()
    start = 0
    end = len(data) - 1
    while start <= end:
        mid = (start + end) // 2
        if data[mid] > target:
            end = mid - 1
            mid = (start + end) // 2
        elif data[mid] < target:
            start = mid + 1
            mid = (start + end) // 2
    return mid