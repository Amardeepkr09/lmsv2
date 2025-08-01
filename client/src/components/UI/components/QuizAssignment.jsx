import {useState} from 'react'
import CreateQuiz from './CreateQuiz';
import AddQuestion from './AddQuestion';
import AddAsignment from './AddAsignment';

function QuizAssignment() {
    const [showQuizCreate,setShowQuizCreate]= useState(false);
    const [showAddQuestion, SetShowAddQuestion]= useState(false);
    const [showAddAsignment, SetShowAddAsignment]= useState(false);

  return (
    <>
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-medium text-gray-900">Quizzes</h3>
                    <button onClick={()=>setShowQuizCreate(true)} type="button" id="add-quiz-btn" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium !rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                        <div class="w-4 h-4 mr-2 flex items-center justify-center">
                            <i class="ri-add-line"></i>
                        </div>
                        Add New Quiz
                    </button>
                </div>
            </div>
            <div class="p-6">
                <div class="space-y-4">
                    <div class="quiz-item border border-gray-200 rounded-lg overflow-hidden">
                        <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <div class="flex items-center">
                                <div class="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                    <i class="ri-question-line"></i>
                                </div>
                                <h4 class="text-base font-medium text-gray-900">HTML Basics Quiz</h4>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                    <div class="w-6 h-6 flex items-center justify-center">
                                        <i class="ri-edit-line"></i>
                                    </div>
                                </button>
                                <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                    <div class="w-6 h-6 flex items-center justify-center">
                                        <i class="ri-delete-bin-line"></i>
                                    </div>
                                </button>
                                <button type="button" class="quiz-toggle p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                    <div class="w-6 h-6 flex items-center justify-center">
                                        <i class="ri-arrow-down-s-line"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="p-4 bg-white quiz-content">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                    <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                        <i class="ri-questionnaire-line"></i>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-500">Questions</p>
                                        <p class="text-sm font-medium text-gray-900">10</p>
                                    </div>
                                </div>
                                <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                    <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                        <i class="ri-time-line"></i>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-500">Time Limit</p>
                                        <p class="text-sm font-medium text-gray-900">15 minutes</p>
                                    </div>
                                </div>
                                <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                    <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                        <i class="ri-percent-line"></i>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-500">Passing Score</p>
                                        <p class="text-sm font-medium text-gray-900">70%</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mt-4 space-y-3">
                                <div class="flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                    <div class="flex items-center">
                                        <span class="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-xs font-medium text-gray-700 mr-3">1</span>
                                        <span class="text-sm font-medium text-gray-800">What does HTML stand for?</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-6 h-6 flex items-center justify-center">
                                                <i class="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-6 h-6 flex items-center justify-center">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                    <div class="flex items-center">
                                        <span class="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-xs font-medium text-gray-700 mr-3">2</span>
                                        <span class="text-sm font-medium text-gray-800">Which tag is used to create a hyperlink?</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-6 h-6 flex items-center justify-center">
                                                <i class="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-6 h-6 flex items-center justify-center">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="p-3 border border-gray-100 rounded-md">
                                    <div className='flex items-center justify-between'>
                                        <div class="flex items-center">
                                            <span class="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-xs font-medium text-gray-700 mr-3">3</span>
                                            <span class="text-sm font-medium text-gray-800">Which HTML element is used to define the title of a document?</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-edit-line"></i>
                                                </div>
                                            </button>
                                            <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-delete-bin-line"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={()=>SetShowAddQuestion(true)} type="button" id="add-question-btn" class="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                    <div class="w-4 h-4 mr-2 flex items-center justify-center">
                                        <i class="ri-add-line"></i>
                                    </div>
                                    Add Question
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="quiz-item border border-gray-200 rounded-lg overflow-hidden">
                        <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <div class="flex items-center">
                                <div class="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                    <i class="ri-question-line"></i>
                                </div>
                                <h4 class="text-base font-medium text-gray-900">CSS Fundamentals Quiz</h4>
                            </div>
                            <div class="flex items-center space-x-2 ">
                                <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                    <div class="w-6 h-6 flex items-center justify-center">
                                        <i class="ri-edit-line"></i>
                                    </div>
                                </button>
                                <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                    <div class="w-6 h-6 flex items-center justify-center">
                                        <i class="ri-delete-bin-line"></i>
                                    </div>
                                </button>
                                <button type="button" class="quiz-toggle p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                    <div class="w-6 h-6 flex items-center justify-center">
                                        <i class="ri-arrow-down-s-line"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="p-4 bg-white quiz-content hidden ">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                    <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                        <i class="ri-questionnaire-line"></i>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-500">Questions</p>
                                        <p class="text-sm font-medium text-gray-900">8</p>
                                    </div>
                                </div>
                                <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                    <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                        <i class="ri-time-line"></i>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-500">Time Limit</p>
                                        <p class="text-sm font-medium text-gray-900">12 minutes</p>
                                    </div>
                                </div>
                                <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                    <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                        <i class="ri-percent-line"></i>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-500">Passing Score</p>
                                        <p class="text-sm font-medium text-gray-900">75%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-medium text-gray-900">Assignments</h3>
                    <button onClick={()=>SetShowAddAsignment(true)} type="button" id="add-assignment-btn" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium !rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                        <div class="w-4 h-4 mr-2 flex items-center justify-center">
                            <i class="ri-add-line"></i>
                        </div>
                        Add Assignment
                    </button>
                </div>
            </div>
            <div class="p-6">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Type</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-6 h-6 mr-3 flex items-center justify-center text-green-600 bg-green-50 rounded-full">
                                            <i class="ri-file-text-line"></i>
                                        </div>
                                        <div class="text-sm font-medium text-gray-900">Build a Responsive Website</div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">July 15, 2025</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">File Upload</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">HTML Fundamentals</td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex items-center justify-end space-x-2">
                                        <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-6 h-6 mr-3 flex items-center justify-center text-green-600 bg-green-50 rounded-full">
                                            <i class="ri-file-text-line"></i>
                                        </div>
                                        <div class="text-sm font-medium text-gray-900">CSS Layout Challenge</div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">July 22, 2025</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">75</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">URL Submission</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CSS Styling</td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex items-center justify-end space-x-2">
                                        <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>                   
                    
        {showQuizCreate && <CreateQuiz onClose={()=>setShowQuizCreate(false)} />}
        {showAddQuestion && <AddQuestion onClose={()=>SetShowAddQuestion(false)} />}
        {showAddAsignment && <AddAsignment onClose={()=>SetShowAddAsignment(false)} />}
    </>
  )
}
  
export default QuizAssignment;