import { useEffect, useState } from 'react';
import logo from '../../assets/gir-logo.svg';
import { Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useCartStore from '../../store/cartStore';
import { FaUser } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const { user, isAuthenticated, cookieLogin } = useAuthStore();
  const { item } = useCartStore();
  const [menu, setMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenu = (currentMenu) => {
    setMenu(currentMenu === menu ? null : currentMenu);
  };

  useEffect(() => {
    cookieLogin();
  }, [isAuthenticated]);

  return (
    <header className='bg-[var(--clr-primary-900)]'>
      <div className='container'>
        <div className='nav-wrapper h-20 flex justify-between items-center'>
          <Link className='sm:w-1/4' to='/'>
            <img src={logo} alt='GIR Logo' />
          </Link>

          {/* Hamburger Button */}
          <button
            className='min-[900px]:hidden text-white text-3xl'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

          {/* Desktop Nav */}
          <nav
            className='hidden min-[900px]:flex justify-between w-3/4'
            role='navigation'
            aria-label='primary navigation'
          >
            <ul role='list' className='flex gap-x-12 font-medium items-center'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='courses'>Courses</Link></li>
              <li><Link to='services'>Services</Link></li>
              <li><Link to='about-us'>About Us</Link></li>
            </ul>

            {/* Desktop Auth Buttons */}
            {!isAuthenticated ? (
              <ul role='list' className='flex gap-x-7 items-center'>
                <li>
                  <Link to='login' className='flex items-center gap-x-2 text-white'>
                    <svg className='icon w-6 h-6'>
                      <use href='/icons/navicons.svg#navicon1'></use>
                    </svg>
                    <span>Login</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='signup'
                    className='flex items-center gap-x-2 bg-[var(--clr-accent-900)] w-38 h-10 justify-center rounded-lg text-white'
                  >
                    <span>Sign up</span>
                    <svg className='icon w-4 h-4'>
                      <use href='/icons/navicons.svg#navicon2'></use>
                    </svg>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className='flex items-center gap-x-7'>
                <li>
                  <Link to='/cart' className='flex items-center gap-x-2 relative text-white'>
                    <svg className='icon w-6 h-6'>
                      <use href='/icons/cart.svg'></use>
                    </svg>
                    <span className='absolute bg-[var(--clr-accent-1000)] h-5 w-5 rounded-full -top-2.5 left-2 flex items-center justify-center text-sm'>
                      {item}
                    </span>
                  </Link>
                </li>
                <li className='relative'>
                  <button
                    onClick={() => handleMenu('menu1')}
                    className='flex items-center gap-x-4 cursor-pointer text-white'
                  >
                    <div className='w-10 h-10 border-2 rounded-full overflow-hidden'>
                      <img className='h-full w-full object-contain' src='/icons/user.svg' alt='' />
                    </div>
                    <div className='flex flex-col items-start'>
                      <span className='text-sm'>Hi,&nbsp;{user?.name}</span>
                      <span className='text-xs text-[var(--clr-primary-200)]'>
                        {user.role === 'student' ? `Learner at GIR` : `Instructor at GIR`}
                      </span>
                    </div>
                  </button>

                  {menu === 'menu1' && (
                    <ul className='bg-white text-[var(--clr-primary-900)] w-47 px-4 py-2 space-y-1 rounded-sm absolute top-12 shadow'>
                      <li>
                        <Link
                          to='/dashboard'
                          className='inline-flex items-center gap-x-2 hover:text-[var(--clr-accent-900)]'
                        >
                          <svg className='h-4 w-4 fill-current'>
                            <use href='./icons/sidebar.svg#dashboard'></use>
                          </svg>
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/mycourses'
                          className='inline-flex items-center gap-x-2 hover:text-[var(--clr-accent-900)]'
                        >
                          <svg className='h-4 w-4 fill-current'>
                            <use href='./icons/sidebar.svg#cources'></use>
                          </svg>
                          My Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/profile'
                          className='inline-flex items-center gap-x-2 hover:text-[var(--clr-accent-900)]'
                        >
                          <FaUser />
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='#'
                          className='inline-flex items-center gap-x-2 hover:text-[var(--clr-accent-900)]'
                        >
                          <svg className='h-4 w-4 fill-current'>
                            <use href='./icons/sidebar.svg#logout'></use>
                          </svg>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className='min-[900px]:hidden bg-white text-[var(--clr-primary-800)] px-6 py-6 space-y-3'>
          <ul className='space-y-4 text-lg'>
            <li><Link to='/' onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to='courses' onClick={() => setMobileMenuOpen(false)}>Courses</Link></li>
            <li><Link to='services' onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to='about-us' onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          </ul>
          {!isAuthenticated ? (
            <div className='space-y-3 pt-4'>
              <Link to='login' onClick={() => setMobileMenuOpen(false)} className='block text-white bg-[var(--clr-accent-900)] py-2 text-center rounded-md'>
                Login
              </Link>
              <Link
                to='signup'
                onClick={() => setMobileMenuOpen(false)}
                className='block text-white bg-[var(--clr-accent-900)] py-2 text-center rounded-md'
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className='pt-4'>
              <Link to='/dashboard' onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
