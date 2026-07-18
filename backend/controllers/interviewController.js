import Interview from "../models/interview.js";

export const createInterview = async (req, res) => {
    try {
        const {role, experience, techStack, difficulty} = req.body;

        const interview = await Interview.create({
            user: req.user.id,
            role,
            experience,
            techStack,
            difficulty,
        })

        res.status(201).json({
            success: true,
            interview,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

export const getInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find({
            user: req.user.id
        })

        res.status(200).json({
            success: true,
            interviews,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

export const getInterviewById = async (req, res) => {
    try {
        const interview = await Interview.findById(req.params.id);

        if(!interview) {
            return res.status(404).json({
                success: false,
                message: "Interview not found",
            })
        }

        res.status(200).json({
            success: true,
            interview,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const updateInterview = async (req, res) => {
    try {
        const interview = await Interview.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if (!interview) {
            return res.status(404).json({
                success: false,
                message: "Interview not found",
            });
        }

        res.status(200).json({
            success: true,
            interview
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

export const deleteInterview = async (req, res) => {
    try {
        const interview = await Interview.findByIdAndDelete(req.params.id);

        if(!interview) {
            return res.status(404).json({
                success: false,
                message: "Interview not found",
            })
        }

        res.status(200).json({
            success: true,
            message: "Interview deleted successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}