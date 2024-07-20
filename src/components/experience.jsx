import { experiences } from '../data';

const Experience = () => {
    return (
        <div className='font-body text-main-text-color-1'>
            {
                experiences ? experiences.map((experience, key) => (
                    <div key={key} className='mt-4 md:flex md:gap-5 '>
                        <div className='font-semibold mb-2 mt-2 md:w-1/6'>{experience.start} &ndash; {experience.end}</div>

                        <div className='group bg-background-color border-main-text-color-1 border-[2px] rounded-lg p-5 md:w-5/6'>
                            <a href={experience.link} target='_blank' rel='noreferrer'>

                                <h1 className='text-xl highlight-on-hover font-bold'>{experience.position} &#x2022; {experience.company}</h1>

                                <p>{experience.description}</p>

                                <div className='flex flex-wrap gap-3 mt-3'>
                                    {
                                        experience.technologies.map((technology, i) => (
                                            <div key={i} className='py-1 px-3 rounded-3xl bg-color-3b text-color-3e'>
                                                {technology}
                                            </div>
                                        ))
                                    }
                                </div>

                            </a>
                        </div>
                    </div>
                ))
                    : null
            }
        </div>
    )
}

export default Experience;