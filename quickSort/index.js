const nums1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

function partition(nums = [], leftIndex = 0, rightIndex = nums.length - 1) {
    // FIND THE PIVOT VALUE AND PIVOT INDEX
    let middleIndex = Math.floor( (leftIndex + rightIndex) / 2);
    let pivotVal = nums[middleIndex];
    let backupRightIndex = rightIndex;
    
    // SWAP THE PIVOT VALUE WITH THE END OF THE ARRAY (tempPivotIndex)
    [ nums[middleIndex], nums[rightIndex] ] = [ nums[rightIndex] , pivotVal ];
    // START ONE LESS THAN WHERE PIVOT VALUE IS STORED
    rightIndex--;

    // While left index is not equal to right index
    while(true) {
        // INCREMENT left index until value is greater than pivot value
        while(nums[leftIndex] <= pivotVal) {
            leftIndex++;
        }
        // DECREMENT right index until value is less than or equal
        while(nums[rightIndex] > pivotVal) {
            rightIndex--;
        }
        // ONCE THE leftIndex and rightIndex MEETS OR GOES PAST
        if (leftIndex <= rightIndex) {
            // SWAP THE values AT leftIndex AND tempPivotIndex
            [ nums[leftIndex], nums[backupRightIndex] ] = [ nums[backupRightIndex] , nums[leftIndex] ];
            // Return left index
            return leftIndex;
        }
        else {
            // Swap values at left and right index
            [ nums[leftIndex], nums[rightIndex] ] = [ nums[rightIndex] , nums[leftIndex] ];
            // increment/decrement values so you can start the next loop imediately
            leftIndex++;
            rightIndex--;
        }
    };
}